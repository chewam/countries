import { writable } from "svelte/store"

export interface Country {
  name: string
  code: string
  flag: string
  capital: string
  found?: boolean
  continent: string
}

const Countries: Country[] = [
  // Europe
  {
    name: "Albania",
    continent: "Europe",
    code: "AL",
    capital: "Tirana",
    flag: ""
  },
  {
    name: "Andorra",
    continent: "Europe",
    code: "AD",
    capital: "Andorra la Vella",
    flag: ""
  },
  {
    name: "Austria",
    continent: "Europe",
    code: "AT",
    capital: "Vienna",
    flag: ""
  },
  {
    name: "Belarus",
    continent: "Europe",
    code: "BY",
    capital: "Minsk",
    flag: ""
  },
  {
    name: "Belgium",
    continent: "Europe",
    code: "BE",
    capital: "Brussels",
    flag: ""
  },
  {
    name: "Bosnia and Herzegovina",
    continent: "Europe",
    code: "BA",
    capital: "Sarajevo",
    flag: ""
  },
  {
    name: "Bulgaria",
    continent: "Europe",
    code: "BG",
    capital: "Sofia",
    flag: ""
  },
  {
    name: "Croatia",
    continent: "Europe",
    code: "HR",
    capital: "Zagreb",
    flag: ""
  },
  {
    name: "Czech Republic",
    continent: "Europe",
    code: "CZ",
    capital: "Prague",
    flag: ""
  },
  {
    name: "Denmark",
    continent: "Europe",
    code: "DK",
    capital: "Copenhagen",
    flag: ""
  },
  {
    name: "Estonia",
    continent: "Europe",
    code: "EE",
    capital: "Tallinn",
    flag: ""
  },
  {
    name: "Finland",
    continent: "Europe",
    code: "FI",
    capital: "Helsinki",
    flag: ""
  },
  {
    name: "France",
    continent: "Europe",
    code: "FR",
    capital: "Paris",
    flag: ""
  },
  {
    name: "Germany",
    continent: "Europe",
    code: "DE",
    capital: "Berlin",
    flag: ""
  },
  {
    name: "Greece",
    continent: "Europe",
    code: "GR",
    capital: "Athens",
    flag: ""
  },
  {
    name: "Hungary",
    continent: "Europe",
    code: "HU",
    capital: "Budapest",
    flag: ""
  },
  {
    name: "Iceland",
    continent: "Europe",
    code: "IS",
    capital: "Reykjavik",
    flag: ""
  },
  {
    name: "Ireland",
    continent: "Europe",
    code: "IE",
    capital: "Dublin",
    flag: ""
  },
  { name: "Italy", continent: "Europe", code: "IT", capital: "Rome", flag: "" },
  {
    name: "Kosovo",
    continent: "Europe",
    code: "XK",
    capital: "Pristina",
    flag: ""
  },
  {
    name: "Latvia",
    continent: "Europe",
    code: "LV",
    capital: "Riga",
    flag: ""
  },
  {
    name: "Liechtenstein",
    continent: "Europe",
    code: "LI",
    capital: "Vaduz",
    flag: ""
  },
  {
    name: "Lithuania",
    continent: "Europe",
    code: "LT",
    capital: "Vilnius",
    flag: ""
  },
  {
    name: "Luxembourg",
    continent: "Europe",
    code: "LU",
    capital: "Luxembourg City",
    flag: ""
  },
  {
    name: "Malta",
    continent: "Europe",
    code: "MT",
    capital: "Valletta",
    flag: ""
  },
  {
    name: "Moldova",
    continent: "Europe",
    code: "MD",
    capital: "Chisinau",
    flag: ""
  },
  {
    name: "Monaco",
    continent: "Europe",
    code: "MC",
    capital: "Monaco",
    flag: ""
  },
  {
    name: "Montenegro",
    continent: "Europe",
    code: "ME",
    capital: "Podgorica",
    flag: ""
  },
  {
    name: "Netherlands",
    continent: "Europe",
    code: "NL",
    capital: "Amsterdam",
    flag: ""
  },
  {
    name: "North Macedonia",
    continent: "Europe",
    code: "MK",
    capital: "Skopje",
    flag: ""
  },
  {
    name: "Norway",
    continent: "Europe",
    code: "NO",
    capital: "Oslo",
    flag: ""
  },
  {
    name: "Poland",
    continent: "Europe",
    code: "PL",
    capital: "Warsaw",
    flag: ""
  },
  {
    name: "Portugal",
    continent: "Europe",
    code: "PT",
    capital: "Lisbon",
    flag: ""
  },
  {
    name: "Romania",
    continent: "Europe",
    code: "RO",
    capital: "Bucharest",
    flag: ""
  },
  {
    name: "Russia",
    continent: "Europe",
    code: "RU",
    capital: "Moscow",
    flag: ""
  },
  {
    name: "San Marino",
    continent: "Europe",
    code: "SM",
    capital: "San Marino",
    flag: ""
  },
  {
    name: "Serbia",
    continent: "Europe",
    code: "RS",
    capital: "Belgrade",
    flag: ""
  },
  {
    name: "Slovakia",
    continent: "Europe",
    code: "SK",
    capital: "Bratislava",
    flag: ""
  },
  {
    name: "Slovenia",
    continent: "Europe",
    code: "SI",
    capital: "Ljubljana",
    flag: ""
  },
  {
    name: "Spain",
    continent: "Europe",
    code: "ES",
    capital: "Madrid",
    flag: ""
  },
  {
    name: "Sweden",
    continent: "Europe",
    code: "SE",
    capital: "Stockholm",
    flag: ""
  },
  {
    name: "Switzerland",
    continent: "Europe",
    code: "CH",
    capital: "Bern",
    flag: ""
  },
  {
    name: "Ukraine",
    continent: "Europe",
    code: "UA",
    capital: "Kyiv",
    flag: ""
  },
  {
    name: "United Kingdom",
    continent: "Europe",
    code: "GB",
    capital: "London",
    flag: ""
  },
  {
    name: "Vatican City",
    continent: "Europe",
    code: "VA",
    capital: "Vatican City",
    flag: ""
  },
  // Asia
  {
    name: "Afghanistan",
    continent: "Asia",
    code: "AF",
    capital: "Kabul",
    flag: ""
  },
  {
    name: "Armenia",
    continent: "Asia",
    code: "AM",
    capital: "Yerevan",
    flag: ""
  },
  {
    name: "Azerbaijan",
    continent: "Asia",
    code: "AZ",
    capital: "Baku",
    flag: ""
  },
  {
    name: "Bahrain",
    continent: "Asia",
    code: "BH",
    capital: "Manama",
    flag: ""
  },
  {
    name: "Bangladesh",
    continent: "Asia",
    code: "BD",
    capital: "Dhaka",
    flag: ""
  },
  {
    name: "Bhutan",
    continent: "Asia",
    code: "BT",
    capital: "Thimphu",
    flag: ""
  },
  {
    name: "Brunei",
    continent: "Asia",
    code: "BN",
    capital: "Bandar Seri Begawan",
    flag: ""
  },
  {
    name: "Cambodia",
    continent: "Asia",
    code: "KH",
    capital: "Phnom Penh",
    flag: ""
  },
  {
    name: "China",
    continent: "Asia",
    code: "CN",
    capital: "Beijing",
    flag: ""
  },
  {
    name: "Cyprus",
    continent: "Asia",
    code: "CY",
    capital: "Nicosia",
    flag: ""
  },
  {
    name: "East Timor",
    continent: "Asia",
    code: "TL",
    capital: "Dili",
    flag: ""
  },
  {
    name: "Georgia",
    continent: "Asia",
    code: "GE",
    capital: "Tbilisi",
    flag: ""
  },
  {
    name: "India",
    continent: "Asia",
    code: "IN",
    capital: "New Delhi",
    flag: ""
  },
  {
    name: "Indonesia",
    continent: "Asia",
    code: "ID",
    capital: "Jakarta",
    flag: ""
  },
  { name: "Iran", continent: "Asia", code: "IR", capital: "Tehran", flag: "" },
  { name: "Iraq", continent: "Asia", code: "IQ", capital: "Baghdad", flag: "" },
  {
    name: "Israel",
    continent: "Asia",
    code: "IL",
    capital: "Jerusalem",
    flag: ""
  },
  { name: "Japan", continent: "Asia", code: "JP", capital: "Tokyo", flag: "" },
  { name: "Jordan", continent: "Asia", code: "JO", capital: "Amman", flag: "" },
  {
    name: "Kazakhstan",
    continent: "Asia",
    code: "KZ",
    capital: "Nur-Sultan",
    flag: ""
  },
  {
    name: "Kuwait",
    continent: "Asia",
    code: "KW",
    capital: "Kuwait City",
    flag: ""
  },
  {
    name: "Kyrgyzstan",
    continent: "Asia",
    code: "KG",
    capital: "Bishkek",
    flag: ""
  },
  {
    name: "Laos",
    continent: "Asia",
    code: "LA",
    capital: "Vientiane",
    flag: ""
  },
  {
    name: "Lebanon",
    continent: "Asia",
    code: "LB",
    capital: "Beirut",
    flag: ""
  },
  {
    name: "Malaysia",
    continent: "Asia",
    code: "MY",
    capital: "Kuala Lumpur",
    flag: ""
  },
  {
    name: "Maldives",
    continent: "Asia",
    code: "MV",
    capital: "Malé",
    flag: ""
  },
  {
    name: "Mongolia",
    continent: "Asia",
    code: "MN",
    capital: "Ulaanbaatar",
    flag: ""
  },
  {
    name: "Myanmar",
    continent: "Asia",
    code: "MM",
    capital: "Naypyidaw",
    flag: ""
  },
  {
    name: "Nepal",
    continent: "Asia",
    code: "NP",
    capital: "Kathmandu",
    flag: ""
  },
  {
    name: "North Korea",
    continent: "Asia",
    code: "KP",
    capital: "Pyongyang",
    flag: ""
  },
  { name: "Oman", continent: "Asia", code: "OM", capital: "Muscat", flag: "" },
  {
    name: "Pakistan",
    continent: "Asia",
    code: "PK",
    capital: "Islamabad",
    flag: ""
  },
  {
    name: "Philippines",
    continent: "Asia",
    code: "PH",
    capital: "Manila",
    flag: ""
  },
  { name: "Qatar", continent: "Asia", code: "QA", capital: "Doha", flag: "" },
  {
    name: "Saudi Arabia",
    continent: "Asia",
    code: "SA",
    capital: "Riyadh",
    flag: ""
  },
  {
    name: "Singapore",
    continent: "Asia",
    code: "SG",
    capital: "Singapore",
    flag: ""
  },
  {
    name: "South Korea",
    continent: "Asia",
    code: "KR",
    capital: "Seoul",
    flag: ""
  },
  {
    name: "Sri Lanka",
    continent: "Asia",
    code: "LK",
    capital: "Colombo",
    flag: ""
  },
  {
    name: "Syria",
    continent: "Asia",
    code: "SY",
    capital: "Damascus",
    flag: ""
  },
  {
    name: "Taiwan",
    continent: "Asia",
    code: "TW",
    capital: "Taipei",
    flag: ""
  },
  {
    name: "Tajikistan",
    continent: "Asia",
    code: "TJ",
    capital: "Dushanbe",
    flag: ""
  },
  {
    name: "Thailand",
    continent: "Asia",
    code: "TH",
    capital: "Bangkok",
    flag: ""
  },
  {
    name: "Turkey",
    continent: "Asia",
    code: "TR",
    capital: "Ankara",
    flag: ""
  },
  {
    name: "Turkmenistan",
    continent: "Asia",
    code: "TM",
    capital: "Ashgabat",
    flag: ""
  },
  {
    name: "United Arab Emirates",
    continent: "Asia",
    code: "AE",
    capital: "Abu Dhabi",
    flag: ""
  },
  {
    name: "Uzbekistan",
    continent: "Asia",
    code: "UZ",
    capital: "Tashkent",
    flag: ""
  },
  {
    name: "Vietnam",
    continent: "Asia",
    code: "VN",
    capital: "Hanoi",
    flag: ""
  },
  { name: "Yemen", continent: "Asia", code: "YE", capital: "Sanaa", flag: "" },
  // Africa
  {
    name: "Algeria",
    continent: "Africa",
    code: "DZ",
    capital: "Algiers",
    flag: ""
  },
  {
    name: "Angola",
    continent: "Africa",
    code: "AO",
    capital: "Luanda",
    flag: ""
  },
  {
    name: "Benin",
    continent: "Africa",
    code: "BJ",
    capital: "Porto-Novo",
    flag: ""
  },
  {
    name: "Botswana",
    continent: "Africa",
    code: "BW",
    capital: "Gaborone",
    flag: ""
  },
  {
    name: "Burkina Faso",
    continent: "Africa",
    code: "BF",
    capital: "Ouagadougou",
    flag: ""
  },
  {
    name: "Burundi",
    continent: "Africa",
    code: "BI",
    capital: "Gitega",
    flag: ""
  },
  {
    name: "Cabo Verde",
    continent: "Africa",
    code: "CV",
    capital: "Praia",
    flag: ""
  },
  {
    name: "Cameroon",
    continent: "Africa",
    code: "CM",
    capital: "Yaoundé",
    flag: ""
  },
  {
    name: "Central African Republic",
    continent: "Africa",
    code: "CF",
    capital: "Bangui",
    flag: ""
  },
  {
    name: "Chad",
    continent: "Africa",
    code: "TD",
    capital: "N'Djamena",
    flag: ""
  },
  {
    name: "Comoros",
    continent: "Africa",
    code: "KM",
    capital: "Moroni",
    flag: ""
  },
  {
    name: "Republic of the Congo",
    continent: "Africa",
    code: "CG",
    capital: "Brazzaville",
    flag: ""
  },
  {
    name: "Democratic Republic of the Congo",
    continent: "Africa",
    code: "CD",
    capital: "Kinshasa",
    flag: ""
  },
  {
    name: "Djibouti",
    continent: "Africa",
    code: "DJ",
    capital: "Djibouti",
    flag: ""
  },
  {
    name: "Egypt",
    continent: "Africa",
    code: "EG",
    capital: "Cairo",
    flag: ""
  },
  {
    name: "Equatorial Guinea",
    continent: "Africa",
    code: "GQ",
    capital: "Malabo",
    flag: ""
  },
  {
    name: "Eritrea",
    continent: "Africa",
    code: "ER",
    capital: "Asmara",
    flag: ""
  },
  {
    name: "Eswatini",
    continent: "Africa",
    code: "SZ",
    capital: "Mbabane",
    flag: ""
  },
  {
    name: "Ethiopia",
    continent: "Africa",
    code: "ET",
    capital: "Addis Ababa",
    flag: ""
  },
  {
    name: "Gabon",
    continent: "Africa",
    code: "GA",
    capital: "Libreville",
    flag: ""
  },
  {
    name: "Gambia",
    continent: "Africa",
    code: "GM",
    capital: "Banjul",
    flag: ""
  },
  {
    name: "Ghana",
    continent: "Africa",
    code: "GH",
    capital: "Accra",
    flag: ""
  },
  {
    name: "Guinea",
    continent: "Africa",
    code: "GN",
    capital: "Conakry",
    flag: ""
  },
  {
    name: "Guinea-Bissau",
    continent: "Africa",
    code: "GW",
    capital: "Bissau",
    flag: ""
  },
  {
    name: "Ivory Coast",
    continent: "Africa",
    code: "CI",
    capital: "Yamoussoukro",
    flag: ""
  },
  {
    name: "Kenya",
    continent: "Africa",
    code: "KE",
    capital: "Nairobi",
    flag: ""
  },
  {
    name: "Lesotho",
    continent: "Africa",
    code: "LS",
    capital: "Maseru",
    flag: ""
  },
  {
    name: "Liberia",
    continent: "Africa",
    code: "LR",
    capital: "Monrovia",
    flag: ""
  },
  {
    name: "Libya",
    continent: "Africa",
    code: "LY",
    capital: "Tripoli",
    flag: ""
  },
  {
    name: "Madagascar",
    continent: "Africa",
    code: "MG",
    capital: "Antananarivo",
    flag: ""
  },
  {
    name: "Malawi",
    continent: "Africa",
    code: "MW",
    capital: "Lilongwe",
    flag: ""
  },
  {
    name: "Mali",
    continent: "Africa",
    code: "ML",
    capital: "Bamako",
    flag: ""
  },
  {
    name: "Mauritania",
    continent: "Africa",
    code: "MR",
    capital: "Nouakchott",
    flag: ""
  },
  {
    name: "Mauritius",
    continent: "Africa",
    code: "MU",
    capital: "Port Louis",
    flag: ""
  },
  {
    name: "Morocco",
    continent: "Africa",
    code: "MA",
    capital: "Rabat",
    flag: ""
  },
  {
    name: "Mozambique",
    continent: "Africa",
    code: "MZ",
    capital: "Maputo",
    flag: ""
  },
  {
    name: "Namibia",
    continent: "Africa",
    code: "NA",
    capital: "Windhoek",
    flag: ""
  },
  {
    name: "Niger",
    continent: "Africa",
    code: "NE",
    capital: "Niamey",
    flag: ""
  },
  {
    name: "Nigeria",
    continent: "Africa",
    code: "NG",
    capital: "Abuja",
    flag: ""
  },
  {
    name: "Rwanda",
    continent: "Africa",
    code: "RW",
    capital: "Kigali",
    flag: ""
  },
  {
    name: "Sao Tome and Principe",
    continent: "Africa",
    code: "ST",
    capital: "São Tomé",
    flag: ""
  },
  {
    name: "Senegal",
    continent: "Africa",
    code: "SN",
    capital: "Dakar",
    flag: ""
  },
  {
    name: "Seychelles",
    continent: "Africa",
    code: "SC",
    capital: "Victoria",
    flag: ""
  },
  {
    name: "Sierra Leone",
    continent: "Africa",
    code: "SL",
    capital: "Freetown",
    flag: ""
  },
  {
    name: "Somalia",
    continent: "Africa",
    code: "SO",
    capital: "Mogadishu",
    flag: ""
  },
  {
    name: "South Africa",
    continent: "Africa",
    code: "ZA",
    capital: "Pretoria",
    flag: ""
  },
  {
    name: "South Sudan",
    continent: "Africa",
    code: "SS",
    capital: "Juba",
    flag: ""
  },
  {
    name: "Sudan",
    continent: "Africa",
    code: "SD",
    capital: "Khartoum",
    flag: ""
  },
  {
    name: "Tanzania",
    continent: "Africa",
    code: "TZ",
    capital: "Dodoma",
    flag: ""
  },
  { name: "Togo", continent: "Africa", code: "TG", capital: "Lomé", flag: "" },
  {
    name: "Tunisia",
    continent: "Africa",
    code: "TN",
    capital: "Tunis",
    flag: ""
  },
  {
    name: "Uganda",
    continent: "Africa",
    code: "UG",
    capital: "Kampala",
    flag: ""
  },
  {
    name: "Zambia",
    continent: "Africa",
    code: "ZM",
    capital: "Lusaka",
    flag: ""
  },
  {
    name: "Zimbabwe",
    continent: "Africa",
    code: "ZW",
    capital: "Harare",
    flag: ""
  },
  // North America
  {
    name: "Antigua and Barbuda",
    continent: "North America",
    code: "AG",
    capital: "St. John's",
    flag: ""
  },
  {
    name: "Bahamas",
    continent: "North America",
    code: "BS",
    capital: "Nassau",
    flag: ""
  },
  {
    name: "Barbados",
    continent: "North America",
    code: "BB",
    capital: "Bridgetown",
    flag: ""
  },
  {
    name: "Belize",
    continent: "North America",
    code: "BZ",
    capital: "Belmopan",
    flag: ""
  },
  {
    name: "Canada",
    continent: "North America",
    code: "CA",
    capital: "Ottawa",
    flag: ""
  },
  {
    name: "Costa Rica",
    continent: "North America",
    code: "CR",
    capital: "San José",
    flag: ""
  },
  {
    name: "Cuba",
    continent: "North America",
    code: "CU",
    capital: "Havana",
    flag: ""
  },
  {
    name: "Dominica",
    continent: "North America",
    code: "DM",
    capital: "Roseau",
    flag: ""
  },
  {
    name: "Dominican Republic",
    continent: "North America",
    code: "DO",
    capital: "Santo Domingo",
    flag: ""
  },
  {
    name: "El Salvador",
    continent: "North America",
    code: "SV",
    capital: "San Salvador",
    flag: ""
  },
  {
    name: "Grenada",
    continent: "North America",
    code: "GD",
    capital: "St. George's",
    flag: ""
  },
  {
    name: "Guatemala",
    continent: "North America",
    code: "GT",
    capital: "Guatemala City",
    flag: ""
  },
  {
    name: "Haiti",
    continent: "North America",
    code: "HT",
    capital: "Port-au-Prince",
    flag: ""
  },
  {
    name: "Honduras",
    continent: "North America",
    code: "HN",
    capital: "Tegucigalpa",
    flag: ""
  },
  {
    name: "Jamaica",
    continent: "North America",
    code: "JM",
    capital: "Kingston",
    flag: ""
  },
  {
    name: "Mexico",
    continent: "North America",
    code: "MX",
    capital: "Mexico City",
    flag: ""
  },
  {
    name: "Nicaragua",
    continent: "North America",
    code: "NI",
    capital: "Managua",
    flag: ""
  },
  {
    name: "Panama",
    continent: "North America",
    code: "PA",
    capital: "Panama City",
    flag: ""
  },
  {
    name: "Saint Kitts and Nevis",
    continent: "North America",
    code: "KN",
    capital: "Basseterre",
    flag: ""
  },
  {
    name: "Saint Lucia",
    continent: "North America",
    code: "LC",
    capital: "Castries",
    flag: ""
  },
  {
    name: "Saint Vincent and the Grenadines",
    continent: "North America",
    code: "VC",
    capital: "Kingstown",
    flag: ""
  },
  {
    name: "Trinidad and Tobago",
    continent: "North America",
    code: "TT",
    capital: "Port of Spain",
    flag: ""
  },
  {
    name: "United States of America",
    continent: "North America",
    code: "US",
    capital: "Washington, D.C.",
    flag: ""
  },
  // South America
  {
    name: "Argentina",
    continent: "South America",
    code: "AR",
    capital: "Buenos Aires",
    flag: ""
  },
  {
    name: "Bolivia",
    continent: "South America",
    code: "BO",
    capital: "Sucre",
    flag: ""
  },
  {
    name: "Brazil",
    continent: "South America",
    code: "BR",
    capital: "Brasília",
    flag: ""
  },
  {
    name: "Chile",
    continent: "South America",
    code: "CL",
    capital: "Santiago",
    flag: ""
  },
  {
    name: "Colombia",
    continent: "South America",
    code: "CO",
    capital: "Bogotá",
    flag: ""
  },
  {
    name: "Ecuador",
    continent: "South America",
    code: "EC",
    capital: "Quito",
    flag: ""
  },
  {
    name: "Guyana",
    continent: "South America",
    code: "GY",
    capital: "Georgetown",
    flag: ""
  },
  {
    name: "Paraguay",
    continent: "South America",
    code: "PY",
    capital: "Asunción",
    flag: ""
  },
  {
    name: "Peru",
    continent: "South America",
    code: "PE",
    capital: "Lima",
    flag: ""
  },
  {
    name: "Suriname",
    continent: "South America",
    code: "SR",
    capital: "Paramaribo",
    flag: ""
  },
  {
    name: "Uruguay",
    continent: "South America",
    code: "UY",
    capital: "Montevideo",
    flag: ""
  },
  {
    name: "Venezuela",
    continent: "South America",
    code: "VE",
    capital: "Caracas",
    flag: ""
  },
  // Oceania
  {
    name: "Australia",
    continent: "Oceania",
    code: "AU",
    capital: "Canberra",
    flag: ""
  },
  { name: "Fiji", continent: "Oceania", code: "FJ", capital: "Suva", flag: "" },
  {
    name: "Kiribati",
    continent: "Oceania",
    code: "KI",
    capital: "South Tarawa",
    flag: ""
  },
  {
    name: "Marshall Islands",
    continent: "Oceania",
    code: "MH",
    capital: "Majuro",
    flag: ""
  },
  {
    name: "Micronesia",
    continent: "Oceania",
    code: "FM",
    capital: "Palikir",
    flag: ""
  },
  {
    name: "Nauru",
    continent: "Oceania",
    code: "NR",
    capital: "Yaren",
    flag: ""
  },
  {
    name: "New Zealand",
    continent: "Oceania",
    code: "NZ",
    capital: "Wellington",
    flag: ""
  },
  {
    name: "Palau",
    continent: "Oceania",
    code: "PW",
    capital: "Ngerulmud",
    flag: ""
  },
  {
    name: "Papua New Guinea",
    continent: "Oceania",
    code: "PG",
    capital: "Port Moresby",
    flag: ""
  },
  {
    name: "Samoa",
    continent: "Oceania",
    code: "WS",
    capital: "Apia",
    flag: ""
  },
  {
    name: "Solomon Islands",
    continent: "Oceania",
    code: "SB",
    capital: "Honiara",
    flag: ""
  },
  {
    name: "Tonga",
    continent: "Oceania",
    code: "TO",
    capital: "Nuku'alofa",
    flag: ""
  },
  {
    name: "Tuvalu",
    continent: "Oceania",
    code: "TV",
    capital: "Funafuti",
    flag: ""
  },
  {
    name: "Vanuatu",
    continent: "Oceania",
    code: "VU",
    capital: "Port Vila",
    flag: ""
  }
]

export default writable(Countries)
