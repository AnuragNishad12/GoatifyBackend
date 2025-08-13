const tiers = {
    "tier1": {
      "name": "Bronze",
      "divisions": {
        "V": { "minXp": 0, "maxXp": 199 },
        "IV": { "minXp": 200, "maxXp": 399 },
        "III": { "minXp": 400, "maxXp": 599 },
        "II": { "minXp": 600, "maxXp": 799 },
        "I": { "minXp": 800, "maxXp": 999 }
      }
    },
    "tier2": {
      "name": "Silver",
      "divisions": {
        "V": { "minXp": 1000, "maxXp": 1299 },
        "IV": { "minXp": 1300, "maxXp": 1599 },
        "III": { "minXp": 1600, "maxXp": 1899 },
        "II": { "minXp": 1900, "maxXp": 2199 },
        "I": { "minXp": 2200, "maxXp": 2499 }
      }
    },
    "tier3": {
      "name": "Gold",
      "divisions": {
        "V": { "minXp": 2500, "maxXp": 2899 },
        "IV": { "minXp": 2900, "maxXp": 3299 },
        "III": { "minXp": 3300, "maxXp": 3699 },
        "II": { "minXp": 3700, "maxXp": 4099 },
        "I": { "minXp": 4100, "maxXp": 4499 }
      }
    },
    "tier4": {
      "name": "Platinum",
      "divisions": {
        "V": { "minXp": 4500, "maxXp": 4999 },
        "IV": { "minXp": 5000, "maxXp": 5499 },
        "III": { "minXp": 5500, "maxXp": 5999 },
        "II": { "minXp": 6000, "maxXp": 6499 },
        "I": { "minXp": 6500, "maxXp": 6999 }
      }
    },
    "tier5": {
      "name": "Crown",
      "divisions": {
        "V": { "minXp": 7000, "maxXp": 7699 },
        "IV": { "minXp": 7700, "maxXp": 8399 },
        "III": { "minXp": 8400, "maxXp": 9099 },
        "II": { "minXp": 9100, "maxXp": 9799 },
        "I": { "minXp": 9800, "maxXp": 10000 }
      }
    },
"tier6": {
  "name": "Ace",
  "divisions": {
    "V": { "minXp": 10001, "maxXp": 11099 },
    "IV": { "minXp": 11100, "maxXp": 12199 },
    "III": { "minXp": 12200, "maxXp": 13299 },
    "II": { "minXp": 13300, "maxXp": 14399 },
    "I": { "minXp": 14400, "maxXp": 15499 }
  }
},
"tier7": {
  "name": "GOAT",
  "divisions": {
    "V": { "minXp": 15500, "maxXp": 16599 },
    "IV": { "minXp": 16600, "maxXp": 17699 },
    "III": { "minXp": 17700, "maxXp": 18799 },
    "II": { "minXp": 18800, "maxXp": 19899 },
    "I": { "minXp": 19900, "maxXp": 21000 }
  }
}
  }



export default function getTierAndDivision(xp) {
  for (const tierKey in tiers) {
    const tier = tiers[tierKey];
    for (const divisionKey in tier.divisions) {
      const { minXp, maxXp } = tier.divisions[divisionKey];
      if (xp >= minXp && xp <= maxXp) {
        return { tier: tierKey, division: divisionKey };
      }
    }
  }
  // If no match found, return default (lowest tier/division)
  return { tier: "tier1", division: "V" };
}


