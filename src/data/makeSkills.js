const skills = [
  [
    "catch",
    "diving catch",
    "diving tackle",
    "dodge",
    "defensive",
    "jump up",
    "leap",
    "safe pair of hands",
    "sidestep",
    "sneaky git",
    "sprint",
    "sure feet",
  ],
  [
    "block",
    "dauntless",
    "dirty player",
    "fend",
    "frenzy",
    "kick",
    "pro",
    "shadowing",
    "strip ball",
    "sure hands",
    "tackle",
    "wrestle",
  ],
  [
    "big hand",
    "claws",
    "disturbing presence",
    "extra arms",
    "foul appearance",
    "horns",
    "iron hard skin",
    "monstrous mouth",
    "prehensile tail",
    "tentacles",
    "two heads",
    "very long legs",
  ],
  [
    "accurate",
    "cannoneer",
    "cloud burster",
    "dump-off",
    "fumblerooskie",
    "hail mary pass",
    "leader",
    "nerves of steel",
    "on the ball",
    "pass",
    "running pass",
    "safe pass",
  ],
  [
    "arm bar",
    "brawler",
    "break tackle",
    "grab",
    "guard",
    "juggernaut",
    "mighty blow",
    "multiple block",
    "pile driver",
    "stand firm",
    "strong arm",
    "think skull",
  ],
  [
    "animal savagery",
    "animosity",
    "always hungry",
    "ball & chain",
    "bombardier",
    "bone head",
    "chainsaw",
    "decay",
    "hypnotic gaze",
    "kick team-mate",
    "loner",
    "no hands",
    "plague ridden",
    "pogo stick",
    "projectile vomit",
    "really stupid",
    "regeneration",
    "right stuff",
    "secret weapon",
    "stab",
    "stunty",
    "swarming",
    "swoop",
    "take root",
    "titchy",
    "throw team-mate",
    "timm-ber!",
    "unchannelled fury",
  ],
];

const data = ["A", "G", "M", "P", "S", "T"];

(function () {
  let counter = 1;
  const output = skills.map((x, i) => {
    console.log(x);
    return x.map((s) => {
      return { id: counter++, name: s, category: data[i] };
    });
  });
  console.log(output);
})();