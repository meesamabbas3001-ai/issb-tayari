// 50 original Mechanical Aptitude practice MCQs for technical-branch candidates.
// Written fresh for this site — simple English, 1-line explanations.
// These are practice questions, NOT from any real test.
export interface MatQ {
  q: string;
  options: string[];
  answer: number;
  explain: string;
}

export const matQuestions: MatQ[] = [
  // ---------- GEARS ----------
  {
    q: 'Two gears are meshed together. The small gear has 10 teeth and the big gear has 30 teeth. If the small gear turns 3 times, how many times does the big gear turn?',
    options: ['1 time', '3 times', '9 times', '30 times'],
    answer: 0,
    explain: 'Teeth ratio is 10:30 = 1:3, so 3 turns of the small gear = 1 turn of the big gear.',
  },
  {
    q: 'When two gears mesh with each other, in which direction do they turn?',
    options: ['Same direction', 'Opposite directions', 'They do not turn', 'Upwards only'],
    answer: 1,
    explain: 'Meshed gears always turn in opposite directions.',
  },
  {
    q: 'Which gear turns faster — the one with fewer teeth or the one with more teeth?',
    options: ['The one with more teeth', 'The one with fewer teeth', 'Both turn at the same speed', 'It depends on the colour'],
    answer: 1,
    explain: 'The smaller gear (fewer teeth) completes more turns in the same time.',
  },
  {
    q: 'If gear A with 20 teeth drives gear B with 40 teeth, gear B will turn:',
    options: ['Twice as fast as A', 'At half the speed of A', 'At the same speed as A', 'Without any force'],
    answer: 1,
    explain: 'B is twice as big, so it turns half as fast as A (in the opposite direction).',
  },
  {
    q: 'On a bicycle, the chain connects:',
    options: ['The front wheel to the back wheel', "The pedals' chainring to the rear sprocket", 'The handle to the seat', 'The brake to the tyre'],
    answer: 1,
    explain: 'The chain carries power from the front chainring (pedals) to the rear sprocket (back wheel).',
  },
  {
    q: 'Bevel gears are used when you want to:',
    options: ['Increase speed only', 'Change the direction of rotation, e.g. by 90 degrees', 'Stop the machine', 'Make no noise at all'],
    answer: 1,
    explain: 'Bevel gears are cone-shaped and turn the drive around a corner.',
  },
  {
    q: 'Gear ratio is calculated by:',
    options: ['Adding the teeth of both gears', 'Dividing the teeth of the driven gear by the teeth of the driving gear', 'Counting the number of gears', 'Measuring the gear size in cm'],
    answer: 1,
    explain: 'Gear ratio = teeth of driven gear ÷ teeth of driving gear.',
  },
  {
    q: 'A gear train with many small gears between the driver and the final gear will make the final gear:',
    options: ['Turn faster', 'Turn slower but with more force', 'Stop turning', 'Turn backwards only'],
    answer: 1,
    explain: 'Each step trades speed for force (torque) — slower, but stronger.',
  },
  // ---------- PULLEYS ----------
  {
    q: 'A single FIXED pulley (like on a flag pole) is used to:',
    options: ['Lift heavier loads easily', 'Change the direction of the pull', 'Double the lifting speed', 'Store extra rope'],
    answer: 1,
    explain: 'A fixed pulley only changes the direction — you pull down, the flag goes up.',
  },
  {
    q: 'A MOVABLE pulley (one that moves up with the load) makes lifting:',
    options: ['Harder', 'Easier — about half the effort', 'Impossible', 'Faster but heavier'],
    answer: 1,
    explain: "The load's weight is shared by two rope parts, so the effort is roughly halved.",
  },
  {
    q: 'In a pulley system, if 4 ropes support the load, the effort needed is about:',
    options: ['4 times the load', 'The same as the load', 'One quarter of the load', 'Zero'],
    answer: 2,
    explain: 'Effort = load ÷ number of supporting ropes.',
  },
  {
    q: 'More pulleys in a block-and-tackle system means:',
    options: ['More effort is needed', 'Less effort is needed', 'No change at all', 'The rope will break'],
    answer: 1,
    explain: 'More supporting ropes share the load, so each pull needs less force.',
  },
  {
    q: 'The groove around a pulley wheel is there to:',
    options: ['Look nice', 'Hold the rope or belt in place', 'Make the wheel heavier', 'Reduce the wheel size'],
    answer: 1,
    explain: 'The groove keeps the rope or belt from slipping off the wheel.',
  },
  {
    q: 'Which of these uses a pulley system?',
    options: ['A crane lifting steel beams', 'A candle', 'A book', 'A shoe'],
    answer: 0,
    explain: 'Cranes use block-and-tackle pulleys to lift very heavy loads with less effort.',
  },
  {
    q: 'You pull 4 metres of rope through a pulley system with 2 supporting ropes. The load rises:',
    options: ['4 metres', '2 metres', '8 metres', '1 metre'],
    answer: 1,
    explain: 'What you save in effort you pay in distance — pull 4 m, the load rises 2 m.',
  },
  // ---------- LEVERS ----------
  {
    q: 'A seesaw is an example of which class of lever?',
    options: ['First class', 'Second class', 'Third class', 'It is not a lever'],
    answer: 0,
    explain: 'First-class lever: the fulcrum (pivot) sits between the effort and the load.',
  },
  {
    q: 'In a first-class lever, the fulcrum (pivot) is:',
    options: ['At one end', 'Between the effort and the load', 'On top of the load', 'Not needed'],
    answer: 1,
    explain: 'Like a seesaw — pivot in the middle, effort on one side, load on the other.',
  },
  {
    q: 'A wheelbarrow is which class of lever?',
    options: ['First class', 'Second class', 'Third class', 'Fourth class'],
    answer: 1,
    explain: 'Second-class lever: the load (in the bucket) sits between the fulcrum (wheel) and the effort (handles).',
  },
  {
    q: 'Tweezers and fishing rods are:',
    options: ['First-class levers', 'Second-class levers', 'Third-class levers', 'Not levers at all'],
    answer: 2,
    explain: 'Third-class lever: effort is applied between the fulcrum and the load — built for speed and reach, not force.',
  },
  {
    q: 'To lift a heavy stone with a crowbar more easily, you should move the fulcrum:',
    options: ['Farther from the stone', 'Closer to the stone', 'It makes no difference', 'Remove the fulcrum'],
    answer: 1,
    explain: 'Fulcrum closer to the load = longer effort arm = less force needed from you.',
  },
  {
    q: 'A bottle opener is an example of a:',
    options: ['First-class lever', 'Second-class lever', 'Third-class lever', 'Pulley'],
    answer: 1,
    explain: 'The cap (load) is between the pivot point and your hand (effort).',
  },
  {
    q: 'Which lever type gives the MOST force for lifting?',
    options: ['Third class', 'First and second class', 'All give exactly the same', 'Levers give no extra force'],
    answer: 1,
    explain: 'First and second-class levers can multiply force; third-class levers trade force for speed.',
  },
  // ---------- INCLINED PLANES ----------
  {
    q: 'A ramp makes it easier to push a heavy box up because:',
    options: ['It is magic', 'It spreads the work over a longer distance, so less force is needed', 'It makes the box lighter', 'It removes all friction'],
    answer: 1,
    explain: 'Same work over a longer distance = smaller force needed at each moment.',
  },
  {
    q: 'Which ramp needs LESS pushing force?',
    options: ['A short, steep ramp', 'A long, gentle ramp', 'Both need exactly the same', 'A vertical wall'],
    answer: 1,
    explain: 'The gentler the slope, the less force needed — but you push for a longer distance.',
  },
  {
    q: 'Which of these is an inclined plane?',
    options: ['A staircase', 'A pulley', 'A gear', 'A battery'],
    answer: 0,
    explain: 'Stairs are simply an inclined plane broken into steps.',
  },
  {
    q: 'A screw is really:',
    options: ['A lever', 'An inclined plane wrapped around a cylinder', 'A pulley', 'A wheel'],
    answer: 1,
    explain: 'Unwrap one thread of a screw and you get a long sloping ramp.',
  },
  {
    q: 'Why do mountain roads zigzag instead of going straight up?',
    options: ['To look beautiful', 'To make the slope gentler so vehicles can climb', 'To waste time', 'To avoid the rain'],
    answer: 1,
    explain: 'Zigzags are long gentle inclined planes instead of one steep, impossible climb.',
  },
  // ---------- SCREWS ----------
  {
    q: 'Turning a normal screw clockwise (to the right) usually:',
    options: ['Loosens it', 'Tightens it / drives it in', 'Breaks it', 'Does nothing'],
    answer: 1,
    explain: '"Righty-tighty" — clockwise drives a standard screw in.',
  },
  {
    q: 'A screw with MORE threads (turns) per inch will:',
    options: ['Hold weaker', 'Grip tighter and hold stronger', 'Fall out faster', 'Need no turning'],
    answer: 1,
    explain: 'More threads = more grip surface biting into the material.',
  },
  {
    q: 'A car jack (screw jack) can lift a whole car because:',
    options: ['It is very tall', 'Many small turns of the handle add up into a huge lifting force', 'Cars are light', 'It uses electricity'],
    answer: 1,
    explain: 'The screw trades many easy turns for one powerful lift.',
  },
  {
    q: 'Which holds better in wood — a nail or a screw?',
    options: ['A nail', 'A screw', 'Both hold exactly the same', 'Neither holds'],
    answer: 1,
    explain: "The screw's threads bite into the wood and resist being pulled out.",
  },
  // ---------- CIRCUITS & BATTERIES ----------
  {
    q: "In a simple circuit, the battery's job is to:",
    options: ['Store water', 'Provide electrical energy (voltage) that pushes current', 'Cool the wires', 'Make light directly'],
    answer: 1,
    explain: 'The battery is the energy source — voltage pushes electric current around the loop.',
  },
  {
    q: 'A switch in a circuit is used to:',
    options: ['Increase the voltage', 'Open or close the path so current can flow or stop', 'Change the battery', 'Measure the current'],
    answer: 1,
    explain: 'Closed switch = complete path = current flows; open switch = broken path.',
  },
  {
    q: 'In a SERIES circuit (one single loop), if one bulb fuses:',
    options: ['The other bulbs stay on', 'All the bulbs go off', 'The other bulbs get brighter', 'The battery starts charging'],
    answer: 1,
    explain: 'One loop means one break stops everything — like old-style Christmas lights.',
  },
  {
    q: 'In a PARALLEL circuit, each bulb gets:',
    options: ['Half the voltage', 'The full battery voltage', 'No voltage at all', 'Double the voltage'],
    answer: 1,
    explain: 'Each branch connects directly across the battery, so every bulb gets full voltage.',
  },
  {
    q: 'The unit used to measure electric CURRENT is the:',
    options: ['Volt', 'Ampere', 'Watt', 'Ohm'],
    answer: 1,
    explain: 'Current is measured in amperes (amps); voltage in volts, power in watts.',
  },
  {
    q: 'A fuse is fitted in a circuit to:',
    options: ['Save electricity', 'Melt and break the circuit if the current gets dangerously high', 'Make the bulb brighter', 'Store electric charge'],
    answer: 1,
    explain: 'The thin fuse wire melts first, protecting the wiring and appliances.',
  },
  {
    q: 'Which of these is a good conductor of electricity?',
    options: ['Rubber', 'Dry wood', 'Copper', 'Plastic'],
    answer: 2,
    explain: 'Metals like copper let current flow easily; rubber, wood and plastic are insulators.',
  },
  {
    q: 'Connecting batteries positive-to-negative in a line is called series, and it:',
    options: ['Keeps the voltage the same', 'Adds up the voltages', 'Stops all current', 'Charges the batteries'],
    answer: 1,
    explain: 'In series the voltages add up — two 1.5 V cells give 3 V.',
  },
  // ---------- HAND TOOLS ----------
  {
    q: 'A spanner (wrench) is used to:',
    options: ['Cut wood', 'Tighten or loosen nuts and bolts', 'Measure length', 'Hammer nails'],
    answer: 1,
    explain: 'The open or ring end grips the nut so you can turn it.',
  },
  {
    q: 'Which tool is the right one for cutting wood?',
    options: ['Hammer', 'Saw', 'Pliers', 'Screwdriver'],
    answer: 1,
    explain: "A saw's toothed blade is made for cutting wood.",
  },
  {
    q: 'A spirit level is used to check:',
    options: ['Temperature', 'Whether a surface is horizontal (level)', 'Weight', 'Speed'],
    answer: 1,
    explain: 'The bubble in the liquid tube sits in the middle when the surface is level.',
  },
  {
    q: 'Pliers are mainly used for:',
    options: ['Hammering nails', 'Gripping, bending and cutting wire', 'Drilling holes', 'Painting walls'],
    answer: 1,
    explain: 'Pliers grip small objects firmly — many also cut wire near the pivot.',
  },
  {
    q: 'The claw end of a claw hammer is used for:',
    options: ['Hitting harder', 'Pulling out nails', 'Measuring wood', 'Cutting rope'],
    answer: 1,
    explain: 'The split claw slides under the nail head to lever it out.',
  },
  {
    q: 'Which tool measures very small lengths most precisely?',
    options: ['Metre ruler', 'Vernier caliper', 'Measuring tape', 'A scale on a map'],
    answer: 1,
    explain: 'A vernier caliper reads to fractions of a millimetre — far finer than a ruler.',
  },
  // ---------- MEASUREMENT UNITS ----------
  {
    q: 'The SI unit of FORCE is the:',
    options: ['Watt', 'Newton', 'Joule', 'Pascal'],
    answer: 1,
    explain: 'Force is measured in newtons (N) — named after Isaac Newton.',
  },
  {
    q: 'The SI unit of POWER is the:',
    options: ['Newton', 'Watt', 'Volt', 'Litre'],
    answer: 1,
    explain: 'Power — how fast work is done — is measured in watts (W).',
  },
  {
    q: 'One kilowatt (kW) equals:',
    options: ['100 watts', '1,000 watts', '10 watts', '1 watt'],
    answer: 1,
    explain: 'Kilo means thousand — 1 kW = 1,000 W.',
  },
  {
    q: 'A thermometer is used to measure:',
    options: ['Pressure', 'Temperature', 'Humidity', 'Speed'],
    answer: 1,
    explain: 'Thermometers measure how hot or cold something is.',
  },
  {
    q: 'Which of these is the correct order from SMALLEST to LARGEST?',
    options: ['Metre → centimetre → kilometre', 'Millimetre → centimetre → metre → kilometre', 'Kilometre → metre → millimetre', 'Centimetre → millimetre → metre'],
    answer: 1,
    explain: 'mm < cm < m < km — each step up is 10× or 1000× the last.',
  },
];
