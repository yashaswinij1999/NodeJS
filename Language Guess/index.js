const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

const language = process.argv[2];

const langCode = franc(language);

if (langCode === "und") {
  console.log(`Sorry, we are unable to find the language code!!!!`.red);
} else {
  const result = langs.where("3", langCode);
  console.log(`Our Possible search : ${result.name}`.brightBlue);
}
