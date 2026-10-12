#!/usr/bin/env python3
"""Parse all MCQ sources into src/data/initialMcqs.ts"""
import re, json, random

random.seed(42)

def clean_ws(s):
    return re.sub(r'\s+', ' ', s).strip()

def norm(s):
    return re.sub(r'[^a-z0-9]', '', s.lower())

def shuffle_opts(opts, correct_idx):
    order = list(range(len(opts)))
    random.shuffle(order)
    return [opts[i] for i in order], order.index(correct_idx)

# ---------------- math notation ----------------
SUP = {'²': '^2', '³': '^3', '⁴': '^4', 'ⁿ': '^n', '⁰': '0', '₀': '0'}
def math_clean(s):
    for k, v in SUP.items():
        s = s.replace(k, v)
    s = s.replace('−', '-').replace('ℝ', 'R').replace('→', '->')
    s = re.sub(r'\bvalue of i4\b', 'value of i^4', s)
    s = re.sub(r'\bex\b', 'e^x', s)
    s = s.replace('arn-1', 'ar^(n-1)')
    s = s.replace('x ex-1', 'x*e^(x-1)')
    s = s.replace('limx→0', 'lim(x→0)').replace('limx->0', 'lim(x→0)')
    return clean_ws(s)

# ---------------- Math Vol 1 ----------------
def parse_math_vol1(path):
    text = open(path).read()
    key_text = text.split('ANSWER KEY')[1]
    ans = {}
    for n, l in re.findall(r'(\d+)\s+([A-D])', key_text):
        ans[int(n)] = l
    body = text.split('ANSWER KEY')[0]
    i = body.find('\n1.')
    body = body[i:]
    items = []
    pat = re.compile(r'(\d+)\.\s+(.*?)\nA\)\s+(.*?)\nB\)\s+(.*?)\nC\)\s+(.*?)\nD\)\s+(.*?)(?=\n\d+\.\s|\Z)', re.S)
    for m in pat.finditer(body):
        n = int(m.group(1))
        q = math_clean(m.group(2))
        opts = [math_clean(m.group(i)) for i in range(3, 7)]
        letter = ans.get(n)
        if letter is None:
            print('WARN vol1 no key for', n); continue
        items.append({'q': q, 'opts': opts, 'ans': 'ABCD'.index(letter)})
    return items

# ---------------- Math Set 1 ----------------
SET1_DROP = {4, 5, 8, 16, 19, 22, 23, 24, 28, 29, 36, 38, 40, 45}
def parse_math_set1(path):
    text = open(path).read()
    items = []
    pat = re.compile(
        r'Q(\d+)\.\s+(.*?)\n\(A\)\s+(.*?)\s+\(B\)\s+([^\n]+)\n'
        r'\(C\)\s+(.*?)\s+\(D\)\s+([^\n]+)\nCorrect Answer:\s+([^\n]+)', re.S)
    for m in pat.finditer(text):
        n = int(m.group(1))
        if n in SET1_DROP:
            continue
        q = math_clean(m.group(2))
        opts = [math_clean(m.group(i)) for i in range(3, 7)]
        corr = math_clean(m.group(7))
        idx = None
        for i, o in enumerate(opts):
            if norm(o) == norm(corr):
                idx = i; break
        if idx is None:
            print('WARN set1 no match Q', n, '|', corr, '|', opts); continue
        items.append({'q': q, 'opts': opts, 'ans': idx})
    return items

# ---------------- generic Q/A table (GK / Islamiat) ----------------
def parse_qa_table(path):
    text = open(path).read()
    items = []
    for line in text.split('\n'):
        line = clean_ws(line)
        if not line:
            continue
        if re.match(r'^(PMA Long|Sr #|Set \d|PMA LONG)', line):
            continue
        m = re.match(r'^(\d+)\s+(.*)$', line)
        if not m:
            continue
        n, rest = int(m.group(1)), m.group(2)
        if '?' not in rest:
            continue
        qi = rest.rindex('?')
        q, a = clean_ws(rest[:qi + 1]), clean_ws(rest[qi + 1:])
        items.append((n, q, a))
    return items

def strip_trailing_paren(a):
    return clean_ws(re.sub(r'\s*\(.*?\)\s*$', '', a))

# ---------------- GK ----------------
GK_DISTRACTORS = {
    1: ["Lahore", "Rawalpindi", "Hyderabad"],
    2: ["Allama Iqbal", "Liaquat Ali Khan", "Maulana Azad"],
    3: ["Multan", "Lahore", "Taxila"],
    4: ["Liaquat Ali Khan", "Iskander Mirza", "Khawaja Nazimuddin"],
    5: ["Keenjhar Lake", "Haleji Lake", "Saif-ul-Malook Lake"],
    6: ["520 km", "890 km", "1,046 km"],
    7: ["August 14, 1947", "October 24, 1945", "July 11, 1948"],
    8: ["Khyber Pass", "Bolan Pass", "Lowari Pass"],
    9: ["General Ayub Khan", "General Douglas Gracey", "General Tikka Khan"],
    10: ["Hilal-e-Jurat", "Sitara-e-Jurat", "Tamgha-e-Jurat"],
    11: ["Allama Iqbal", "Faiz Ahmed Faiz", "Ahmed Faraz"],
    12: ["2,430 km", "2,800 km", "1,046 km"],
    13: ["March 1969", "July 1977", "October 1999"],
    14: ["March 23, 1973", "August 14, 1972", "March 23, 1956"],
    15: ["Risalpur", "Cherat", "Quetta"],
    16: ["Major Aziz Bhatti Shaheed", "Major Muhammad Akram Shaheed", "Captain Karnal Sher Khan Shaheed"],
    17: ["August 14, 1947", "March 23, 1940", "September 6, 1949"],
    18: ["Cholistan Desert", "Thal Desert", "Kharan Desert"],
    19: ["Jhelum River", "Chenab River", "Ravi River"],
    20: ["Jinnah Park", "Lawrence Gardens", "Shalimar Gardens"],
    21: ["8,848 meters", "8,126 meters", "8,586 meters"],
    22: ["Yahya Khan", "Zulfikar Ali Bhutto", "Iskander Mirza"],
    23: ["Mangla Dam", "Diamer-Bhasha Dam", "Warsak Dam"],
    24: ["May 28, 1999", "August 14, 1998", "May 11, 1998"],
    25: ["Ayub Khan", "Quaid-e-Azam", "Liaquat Ali Khan"],
    26: ["Saudi Arabia", "Turkey", "Egypt"],
    27: ["Karachi", "Rawalpindi", "Lahore"],
    28: ["Peshawar", "Karachi", "Chaklala"],
    29: ["990 km", "1,200 km", "740 km"],
    30: ["Montgomery", "Campbellpur", "Gujranwala"],
    31: ["Lyallpur", "Montgomery", "Campbellpur"],
    32: ["Tamgha-e-Imtiaz", "Sitara-e-Imtiaz", "Hilal-e-Imtiaz"],
    33: ["December 8, 1984", "January 16, 1985", "August 8, 1967"],
    34: ["Geneva, Switzerland", "Vienna, Austria", "Paris, France"],
    35: ["Won", "Yuan", "Ringgit"],
    36: ["Istanbul", "Izmir", "Antalya"],
    37: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    38: ["Tonga Trench", "Java Trench", "Puerto Rico Trench"],
    39: ["Asia", "Australia", "South America"],
    40: ["Africa", "North America", "Europe"],
    41: ["10", "20", "25"],
    42: ["Geneva, Switzerland", "New York, USA", "Paris, France"],
    43: ["Oxygen", "Nitrogen", "Carbon Monoxide"],
    44: ["Thermometer", "Anemometer", "Hygrometer"],
    45: ["Time", "Speed", "Brightness"],
    46: ["Louis Pasteur", "Marie Curie", "Joseph Lister"],
    47: ["Liver", "Heart", "Lungs"],
    48: ["KCl", "NaOH", "H2SO4"],
    49: ["3 x 10^6 m/s", "1.5 x 10^8 m/s", "3 x 10^10 m/s"],
    50: ["10", "12", "9"],
}

def build_gk():
    raw = parse_qa_table('source-mcqs/gk_set1.txt')
    items = []
    for n, q, a in raw:
        if n == 22:
            # source answer is factually impossible (Liaquat died 1951) — corrected
            q = 'Who was the President of Pakistan during the 1965 War?'
            a = 'Ayub Khan'
        else:
            a = strip_trailing_paren(a)
            a = a.split('/')[0].strip()
            a = clean_ws(a)
        d = GK_DISTRACTORS.get(n)
        if not d:
            print('WARN gk no distractors for', n); continue
        items.append({'q': q, 'opts': [a] + d, 'ans': 0})
    return items

# ---------------- extra GK transcribed from scanned pages ----------------
PMAIMP_EXTRA = [
    ("Who was the leader of the Kuffar in Ghazwa-e-Badr?", "Abu Jahl", ["Utbah bin Rabiah", "Abu Sufyan", "Walid bin Utbah"]),
    ("How many Muslims were martyred in Ghazwa-e-Badr?", "14", ["70", "10", "27"]),
    ("Ghazwa-e-Badr is also known as?", "Yaum-ul-Furqan", ["Yaum-ul-Fath", "Ghazwa-e-Kubra", "Yaum-ul-Jihad"]),
    ("How many Muslims fought in Ghazwa-e-Uhud?", "1000", ["700", "3000", "313"]),
    ("How many non-Muslims fought in Ghazwa-e-Uhud?", "3000", ["1000", "2000", "5000"]),
    ("How many Muslims were martyred in Ghazwa-e-Uhud?", "70", ["14", "50", "100"]),
    ("The Battle of Mu'tah was fought in which Hijri year?", "7 Hijri", ["6 Hijri", "8 Hijri", "9 Hijri"]),
    ("The Battle of Tabuk was fought in which Hijri year?", "9 Hijri", ["8 Hijri", "10 Hijri", "7 Hijri"]),
    ("The Battle of Hunain was fought in which Hijri year?", "8 Hijri", ["7 Hijri", "9 Hijri", "10 Hijri"]),
    ("In which Hijri year did Hazrat Khalid bin Waleed (R.A) accept Islam?", "6 Hijri", ["5 Hijri", "7 Hijri", "8 Hijri"]),
    ("The conquest of Khyber took place in which Hijri year?", "6 Hijri", ["5 Hijri", "7 Hijri", "4 Hijri"]),
    ("Khutba Hijjat-ul-Wida was delivered in which Hijri year?", "10 Hijri", ["9 Hijri", "8 Hijri", "11 Hijri"]),
    ("The tragedy of Karbala happened in which Hijri year?", "61 Hijri", ["60 Hijri", "62 Hijri", "40 Hijri"]),
    ("What was the name of the atom bomb dropped on Hiroshima?", "Little Boy", ["Fat Man", "Enola Gay", "Bockscar"]),
    ("What was the name of the atom bomb dropped on Nagasaki?", "Fat Man", ["Little Boy", "Enola Gay", "Bockscar"]),
    ("The plane that dropped the atomic bomb on Hiroshima was?", "Enola Gay", ["Bockscar", "Little Boy", "Fat Man"]),
    ("When was the atomic bomb dropped on Hiroshima?", "6 August 1945", ["9 August 1945", "6 August 1944", "16 July 1945"]),
    ("Hazrat Hajra (R.A) was the mother of?", "Hazrat Ismail (A.S)", ["Hazrat Ishaq (A.S)", "Hazrat Yousaf (A.S)", "Hazrat Yaqub (A.S)"]),
    ("If there is no President, who runs the country?", "Chairman of the Senate", ["Prime Minister", "Chief Justice", "Speaker National Assembly"]),
    ("How long was the trench dug in Ghazwa-e-Khandaq?", "5.5 km", ["3.5 km", "7 km", "9 km"]),
    ("Who is known as Kaleemullah?", "Hazrat Musa (A.S)", ["Hazrat Ibrahim (A.S)", "Hazrat Isa (A.S)", "Hazrat Nuh (A.S)"]),
    ("Which year is known as Aam-ul-Huzn (the Year of Grief)?", "10th year of Prophethood", ["8th year of Prophethood", "11th year of Prophethood", "13th year of Prophethood"]),
    ("When was the first Constitution of Pakistan made?", "23 March 1956", ["14 August 1947", "23 March 1940", "8 June 1962"]),
    ("When did Ayub Khan impose martial law?", "7 October 1958", ["25 March 1969", "5 July 1977", "12 October 1999"]),
    ("What is the capital of Kenya?", "Nairobi", ["Mombasa", "Kampala", "Dar es Salaam"]),
    ("In which year did Quaid-e-Azam present his 14 Points?", "1929", ["1916", "1940", "1930"]),
    ("MAO College Aligarh was established in?", "1877", ["1875", "1880", "1920"]),
    ("What is the rate of Zakat?", "2.5%", ["5%", "7.5%", "10%"]),
    ("Khums is what fraction of war booty?", "One-fifth (1/5)", ["One-tenth (1/10)", "One-fourth (1/4)", "One-third (1/3)"]),
    ("A person who owns wealth equal to Nisab is called?", "Sahib-e-Nisab", ["Sahib-e-Haisiyat", "Mustahiq", "Aamil"]),
    ("Who was the first Chief of Army Staff of Pakistan?", "General Tikka Khan", ["General Zia-ul-Haq", "General Aslam Baig", "General Pervez Musharraf"]),
    ("How many members are in the Senate of Pakistan?", "96", ["100", "104", "342"]),
    ("What is the height of Mount Everest?", "8,848 meters", ["8,611 meters", "8,848 feet", "7,999 meters"]),
    ("Where were the 2016 Olympics held?", "Brazil (Rio de Janeiro)", ["Tokyo, Japan", "London, UK", "Beijing, China"]),
    ("Where were the 2018 Winter Olympics held?", "South Korea (Pyeongchang)", ["Japan", "China", "Russia"]),
    ("Where were the 2020 Olympics held?", "Tokyo, Japan", ["Paris, France", "Rio, Brazil", "London, UK"]),
    ("Who was the US President during World War I?", "Woodrow Wilson", ["Franklin Roosevelt", "Theodore Roosevelt", "Harry Truman"]),
    ("Who was the US President during World War II?", "Franklin D. Roosevelt", ["Harry Truman", "Woodrow Wilson", "Dwight Eisenhower"]),
    ("What was the old name of Madinah?", "Yathrib", ["Bakkah", "Taif", "Khaybar"]),
    ("What was the old name of Makkah?", "Bakkah", ["Yathrib", "Taif", "Jerusalem"]),
    ("FATA stands for?", "Federally Administered Tribal Areas", ["Federal Administrative Tribal Authority", "Frontier Administered Tribal Areas", "Federally Allied Tribal Areas"]),
    ("Which is the largest province of Pakistan by area?", "Balochistan", ["Punjab", "Sindh", "Khyber Pakhtunkhwa"]),
    ("Which is the largest province of Pakistan by population?", "Punjab", ["Sindh", "Balochistan", "Khyber Pakhtunkhwa"]),
    ("Which is the largest city of Pakistan by population?", "Karachi", ["Lahore", "Faisalabad", "Rawalpindi"]),
    ("Islamabad officially became the capital of Pakistan in?", "1967", ["1960", "1962", "1973"]),
    ("About what percentage of Pakistanis are Muslim?", "97%", ["85%", "90%", "80%"]),
    ("Which city of Pakistan recorded one of the highest temperatures ever?", "Jacobabad", ["Multan", "Sibi", "Larkana"]),
    ("Which is the coldest inhabited place on Earth?", "Oymyakon (Russia)", ["Norilsk (Russia)", "Barrow (Alaska)", "Reykjavik (Iceland)"]),
    ("What is the national bird of Pakistan?", "Chukar partridge", ["Peacock", "Shaheen falcon", "Houbara bustard"]),
    ("What is the national fruit of Pakistan?", "Mango", ["Orange", "Banana", "Guava"]),
    ("What is the national animal of Pakistan?", "Markhor", ["Snow leopard", "Indus dolphin", "Chinkara"]),
    ("Which plateau is called the 'Roof of the World'?", "Tibetan Plateau", ["Deosai Plateau", "Potohar Plateau", "Balochistan Plateau"]),
    ("Which is the largest country in Africa?", "Algeria", ["Sudan", "Libya", "Egypt"]),
    ("Which is the largest desert in the world?", "Sahara Desert", ["Gobi Desert", "Thar Desert", "Kalahari Desert"]),
]

# ---------------- Islamiat ----------------
ISL_DISTRACTORS = {
    1: ["Surah Al-Baqarah", "Surah Al-Ikhlas", "Surah Al-Kawthar"],
    2: ["Surah Al-Imran", "Surah An-Nisa", "Surah Al-Maidah"],
    3: ["Surah Al-Ikhlas", "Surah Al-Asr", "Surah Al-Fatiha"],
    4: ["Surah Al-Anfal", "Surah Yunus", "Surah Hud"],
    5: ["Surah Al-Fatiha", "Surah Ar-Rahman", "Surah Al-Kahf"],
    6: ["26", "28", "25"],
    7: ["Ghazwa Badr", "Ghazwa Uhud", "Ghazwa Khandaq"],
    8: ["1 A.H.", "3 A.H.", "5 A.H."],
    9: ["1 A.H.", "3 A.H.", "9 A.H."],
    10: ["8 A.H.", "10 A.H.", "6 A.H."],
    11: ["Hazrat Umar (R.A)", "Hazrat Usman (R.A)", "Hazrat Ali (R.A)"],
    12: ["Zun-Nurain", "Asadullah", "Siddique"],
    13: ["Al-Farooq", "Asadullah", "Siddique"],
    14: ["Al-Farooq", "Zun-Nurain", "Siddique"],
    15: ["Hazrat Hamza (R.A)", "Hazrat Ali (R.A)", "Hazrat Saad bin Abi Waqas (R.A)"],
    16: ["Hazrat Ibrahim (A.S)", "Hazrat Ismail (A.S)", "Hazrat Nuh (A.S)"],
    17: ["Hazrat Adam (A.S)", "Hazrat Nuh (A.S)", "Hazrat Musa (A.S)"],
    18: ["Zabur", "Injeel", "Quran"],
    19: ["Tawrat", "Injeel", "Quran"],
    20: ["Tawrat", "Zabur", "Quran"],
    21: ["5", "14", "30"],
    22: ["12", "15", "11"],
    23: ["Battle of Badr", "Battle of Uhud", "Battle of Khandaq"],
    24: ["5 A.H.", "7 A.H.", "8 A.H."],
    25: ["7 A.H.", "9 A.H.", "10 A.H."],
    26: ["Hazrat Halima (R.A)", "Hazrat Khadija (R.A)", "Hazrat Fatima (R.A)"],
    27: ["Hazrat Amina (R.A)", "Hazrat Khadija (R.A)", "Hazrat Aisha (R.A)"],
    28: ["35", "45", "33"],
    29: ["Cave Thawr", "Masjid-e-Nabawi", "Mount Arafat"],
    30: ["Hazrat Abu Bakr (R.A)", "Hazrat Umar (R.A)", "Hazrat Ali (R.A)"],
    31: ["Muhammad bin Idris", "Ahmad bin Hanbal", "Ismail bin Kathir"],
    32: ["2", "4", "7"],
    33: ["1", "5", "25"],
    34: ["Hazrat Jibrael (A.S)", "Hazrat Izrael (A.S)", "Hazrat Israfil (A.S)"],
    35: ["Hazrat Mikael (A.S)", "Hazrat Jibrael (A.S)", "Hazrat Israfil (A.S)"],
    36: ["Hazrat Ammar (R.A)", "Hazrat Zaid (R.A)", "Hazrat Salman (R.A)"],
    37: ["Solar Eclipse", "Rain", "Earthquake"],
    38: ["Lunar Eclipse", "Rain", "Earthquake"],
    39: ["Solar Eclipse", "Lunar Eclipse", "Victory"],
    40: ["3", "5", "7"],
    41: ["2", "4", "5"],
    42: ["Masjid-e-Nabawi", "Masjid-e-Haram", "Masjid-e-Aqsa"],
    43: ["2 A.H.", "4 A.H.", "5 A.H."],
    44: ["1 A.H.", "3 A.H.", "4 A.H."],
    45: ["300", "314", "1000"],
    46: ["900", "313", "1500"],
    47: ["Surah Al-Baqarah", "Surah An-Nisa", "Surah Al-Maidah"],
    48: ["7", "5", "10"],
    49: ["5 Tolas", "10 Tolas", "52.5 Tolas"],
    50: ["7.5 Tolas", "40 Tolas", "100 Tolas"],
}

def isl_clean_answer(a):
    a = re.sub(r'\s*\((Rebuilt by[^)]*|Torah|Psalms|Gospel|Surah As-Saff|Lion of Allah)\)', '', a)
    a = re.sub(r'^(\d+(?:\.\d+)?)\s+(Ghazwas|Manzils|Sajdahs|Years|Farz|Heads|Muslims|Non-Muslims|Times|Tolas)$', r'\1', a)
    return clean_ws(a)

def build_islamiat():
    raw = parse_qa_table('source-mcqs/islamiat_set2.txt')
    items = []
    for n, q, a in raw:
        if n == 15:
            q = 'Who is known as Saifullah (Sword of Allah)?'
        elif n == 16:
            q = 'Who first built the Kaaba?'
        elif n == 44:
            q = 'Ghazwa Badr was fought in which Hijri year?'
        a = isl_clean_answer(a)
        d = ISL_DISTRACTORS.get(n)
        if not d:
            print('WARN isl no distractors for', n); continue
        items.append({'q': q, 'opts': [a] + d, 'ans': 0})
    return items

# ---------------- Verbal Set 3 ----------------
VERBAL_DISTRACTORS = {
    1: ["80", "82", "90"], 2: ["70", "73", "81"], 3: ["4", "6", "10"],
    4: ["29", "31", "40"], 5: ["2", "4", "12"],
    6: ["Monday", "Wednesday", "Thursday"], 7: ["Saturday", "Thursday", "Sunday"],
    8: ["Friday", "Sunday", "Monday"],
    9: ["40%", "46%", "56%"], 10: ["1 km per minute", "3 km per minute", "4 km per minute"],
    11: ["10 km", "11 km", "14 km"],
    12: ["Apple", "Mango", "Orange"], 13: ["Football", "Cricket", "Tennis"],
    14: ["60", "62", "128"], 15: ["30", "35", "49"], 16: ["16", "17", "21"],
    17: ["50", "65", "70"], 18: ["12", "14", "15"],
    19: ["Puppy", "Cub", "Calf"], 20: ["Hospital", "Office", "College"],
    21: ["Drinking", "Cooking", "Reading"], 22: ["High", "Deep", "Slow"],
    23: ["4 days", "6 days", "20 days"], 24: ["Rs. 60", "Rs. 80", "Rs. 84"],
    25: ["Speed", "Distance", "Force"],
    26: ["29", "31", "45"], 27: ["0.05", "5", "50"],
    28: ["20-1-3", "3-20-1", "1-3-20"],
    29: ["70%", "75%", "80%"], 30: ["12 years old", "14 years old", "20 years old"],
    31: ["Islamabad", "Kabul", "Delhi"], 32: ["Iron", "Copper", "Gold"],
    33: ["11", "13", "14"], 34: ["24", "26", "30"],
    35: ["90 degrees", "270 degrees", "360 degrees"], 36: ["180 degrees", "270 degrees", "540 degrees"],
    37: ["Right Angle", "Obtuse Angle", "Reflex Angle"], 38: ["Acute Angle", "Right Angle", "Reflex Angle"],
    39: ["Scarce", "Rare", "Empty"], 40: ["Synthetic", "Fake", "Man-made"],
    41: ["Expand", "Enlarge", "Grow"],
    42: ["in", "on", "for"], 43: ["from", "by", "with"], 44: ["for", "with", "on"], 45: ["in", "on", "at"],
    46: ["70", "74", "144"], 47: ["50", "70", "120"], 48: ["2", "4", "9"],
    49: ["49", "51", "100"], 50: ["Monday", "Saturday", "Thursday"],
}

def parse_verbal_set3(path):
    text = open(path).read()
    text = re.sub(r'(?m)^PMA Long Course Initial Test.*$', '', text)
    text = re.sub(r'(?m)^Sr # Question.*$', '', text)
    text = re.sub(r'(?m)^PMA LONG COURSE.*$', '', text)
    parts = re.split(r'(?m)^(\d+)\s+', text)
    items = []
    for i in range(1, len(parts), 2):
        n = int(parts[i])
        body = clean_ws(parts[i + 1])
        if not body:
            continue
        if '?' in body:
            qi = body.rindex('?')
            q, a = clean_ws(body[:qi + 1]), clean_ws(body[qi + 1:])
        else:
            toks = body.rsplit(' ', 1)
            q, a = clean_ws(toks[0]), clean_ws(toks[1])
        a = re.sub(r'\s*\(.*?\)\s*$', '', a)
        a = a.split('/')[0].strip()
        a = clean_ws(a)
        d = VERBAL_DISTRACTORS.get(n)
        if not d:
            print('WARN verbal no distractors for', n, q[:50]); continue
        items.append({'n': n, 'q': q, 'opts': [a] + d, 'ans': 0})
    return items

# ---------------- paid_verbals ----------------
def parse_paid_verbals(path, set3_items):
    text = open(path).read()
    parts = re.split(r'(?m)^(\d+)\.\s+', text)
    set3_cores = set()
    for it in set3_items:
        set3_cores.add(norm(re.sub(r'\d+', '', it['q'])))
    items = []
    seen = set()

    def add_tf(statement, truth):
        core = norm(re.sub(r'\d+', '', statement))
        if core in set3_cores or core in seen:
            return
        seen.add(core)
        if random.random() < 0.5:
            opts, ans = ["True", "False"], 0 if truth else 1
        else:
            opts, ans = ["False", "True"], 1 if truth else 0
        items.append({'q': statement, 'opts': opts, 'ans': ans})

    for i in range(1, len(parts), 2):
        n = int(parts[i])
        body = clean_ws(parts[i + 1])
        if n == 14 or n == 18:
            continue
        m = re.match(r'^(.*?)\s+\((True|False)[^)]*\)\s*$', body)
        if not m:
            print('WARN paid no T/F match:', n, body[:60]); continue
        statement, truth = clean_ws(m.group(1)), m.group(2) == 'True'
        statement = re.sub(r'\s+', ' ', statement)
        add_tf(statement, truth)

    odd = [
        ("Which one is different: Angle, Rectangle, Square, Hexagon?", "Angle", ["Rectangle", "Square", "Hexagon"]),
        ("Which one is different: Cricket, Football, Tennis, Baseball?", "Football", ["Cricket", "Tennis", "Baseball"]),
        ("Which one is different: Hockey, Football, Basketball, Baseball, Tennis?", "Football", ["Hockey", "Basketball", "Baseball", "Tennis"]),
        ("Which one is different: Wheat, Hay, Rice, Barley?", "Hay", ["Wheat", "Rice", "Barley"]),
        ("Which one is different: Monkey, Ape, Chimpanzee, Panda, Baboon?", "Panda", ["Monkey", "Ape", "Chimpanzee", "Baboon"]),
        ("Which one is different: America, Africa, Asia, Euro?", "Euro", ["America", "Africa", "Asia"]),
    ]
    for q, a, d in odd:
        items.append({'q': q, 'opts': [a] + d, 'ans': 0})

    series = [
        ("Complete the series: 115, 55, 170, 65, 235, ?", "75", ["70", "80", "85"]),
        ("Complete the series: 66, 63, 57, 45, ?", "21", ["18", "24", "33"]),
        ("Complete the series: 2, 6, 14, 30, 62, ?", "126", ["124", "128", "122"]),
        ("Complete the series: B, E, J, Q, ?", "X", ["W", "Y", "V"]),
        ("Complete the series: A, C, F, J, O, ?", "U", ["T", "V", "S"]),
        ("Complete the series: L, M, N, ?", "O", ["P", "K", "Q"]),
    ]
    for q, a, d in series:
        items.append({'q': q, 'opts': [a] + d, 'ans': 0})
    return items

# ---------------- English (first 150 rows) ----------------
def parse_english(path, limit=150):
    text = open(path).read()
    lines = []
    for line in text.split('\n'):
        s = line.strip()
        if not s:
            continue
        if re.match(r'^(Page \d+ of|Sr# Question|TestPoint|English Important)', s):
            continue
        lines.append(s)
    rows, buf = [], ''
    for line in lines:
        if re.match(r'^\d+(\s|$)', line):
            if buf:
                rows.append(buf)
            buf = line
        else:
            buf += ' ' + line
    if buf:
        rows.append(buf)
    items = []
    pat = re.compile(r'^(\d+)\s+(.*?)\s+A\.\s+(.*?)\s+B\.\s+(.*?)\s+C\.\s+(.*?)\s+D\.\s+(.*?)\s+([A-D])$')
    for row in rows[:limit]:
        row = clean_ws(row)
        m = pat.match(row)
        if not m:
            print('WARN eng no match:', row[:90]); continue
        q = clean_ws(m.group(2))
        opts = [clean_ws(m.group(i)) for i in range(3, 7)]
        key = m.group(7)
        items.append({'q': q, 'opts': opts, 'ans': 'ABCD'.index(key)})
    return items

# ---------------- assemble ----------------
def main():
    math1 = parse_math_vol1('source-mcqs/math_vol1.txt')
    math2 = parse_math_set1('source-mcqs/math_set1.txt')
    seen = set()
    math = []
    for it in math1 + math2:
        k = norm(it['q'])
        if k in seen:
            continue
        seen.add(k)
        math.append(it)
    print('math:', len(math1), '+', len(math2), '->', len(math))

    gk = build_gk()
    gk_seen = set(norm(x['q']) for x in gk)
    for q, a, d in PMAIMP_EXTRA:
        if norm(q) in gk_seen:
            continue
        gk_seen.add(norm(q))
        gk.append({'q': q, 'opts': [a] + d, 'ans': 0})
    print('gk:', len(gk))

    isl = build_islamiat()
    print('islamiat:', len(isl))

    verbal3 = parse_verbal_set3('source-mcqs/verbal_set3.txt')
    paid = parse_paid_verbals('source-mcqs/paid_verbals.txt', verbal3)
    verbal = verbal3 + paid
    vseen, vfinal = set(), []
    for it in verbal:
        k = norm(it['q'])
        if k in vseen:
            continue
        vseen.add(k)
        vfinal.append(it)
    print('verbal:', len(verbal3), '+', len(paid), '->', len(vfinal))

    eng = parse_english('source-mcqs/english_1000.txt', 150)
    print('english:', len(eng))

    all_seen, final = set(), []
    ordered = [('math', math), ('verbal', vfinal), ('gk', gk), ('islamiat', isl), ('english', eng)]
    for subj, items in ordered:
        for it in items:
            k = norm(it['q'])
            if k in all_seen:
                continue
            all_seen.add(k)
            opts, ans = shuffle_opts(it['opts'], it['ans'])
            final.append((subj, it['q'], opts, ans))

    lines = []
    lines.append("export type McqSubject = 'math' | 'verbal' | 'gk' | 'islamiat' | 'english';")
    lines.append("")
    lines.append("export interface Mcq {")
    lines.append("  q: string;")
    lines.append("  options: string[];")
    lines.append("  answer: number;")
    lines.append("  subject: McqSubject;")
    lines.append("}")
    lines.append("")
    lines.append("// Practice MCQs for the PMA initial academic test: Mathematics, Verbal Intelligence,")
    lines.append("// General Knowledge, Islamiat and English. Compiled for practice only —")
    lines.append("// these are NOT the real test papers.")
    lines.append("export const initialMcqs: Mcq[] = [")
    counts = {}
    for subj, q, opts, ans in final:
        counts[subj] = counts.get(subj, 0) + 1
        entry = {"q": q, "options": opts, "answer": ans, "subject": subj}
        lines.append("  " + json.dumps(entry, ensure_ascii=False) + ",")
    lines.append("];")
    out = '/home/hatch/workspace/issb-prep/src/data/initialMcqs.ts'
    open(out, 'w').write('\n'.join(lines) + '\n')
    print('TOTAL:', len(final), counts)

if __name__ == '__main__':
    main()
