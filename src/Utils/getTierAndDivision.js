const tiers = {
    "tier1": {
      "name": "Bronze",
      "divisions": {
        "V": { "minXp": 0, "maxXp": 199,"image":"https://firebasestorage.googleapis.com/v0/b/listener-1d38a.appspot.com/o/GoatifyAssets%2FBronzeBadge.png?alt=media&token=4fef1209-68d0-409f-952e-9e7870f34454" },
        "IV": { "minXp": 200, "maxXp": 399, "image":"https://firebasestorage.googleapis.com/v0/b/listener-1d38a.appspot.com/o/GoatifyAssets%2FBronzeBadgeIV.png?alt=media&token=36b28e52-96b2-4e85-82c5-cdec685e59c0" },
        "III": { "minXp": 400, "maxXp": 599,"image":"https://firebasestorage.googleapis.com/v0/b/listener-1d38a.appspot.com/o/GoatifyAssets%2FBronzeBadgeIII.png?alt=media&token=0c2e8f52-6e1d-41c6-8d76-aefda714c8c5" },
        "II": { "minXp": 600, "maxXp": 799,"image":"https://firebasestorage.googleapis.com/v0/b/listener-1d38a.appspot.com/o/GoatifyAssets%2FBronzeBadgeII.png?alt=media&token=d3648d8a-635b-4764-a491-843181ab9ae1" },
        "I": { "minXp": 800, "maxXp": 999, "image":"https://firebasestorage.googleapis.com/v0/b/listener-1d38a.appspot.com/o/GoatifyAssets%2FBronzeBadgeI.png?alt=media&token=79750dda-1a63-473e-a40f-f0f46b8a53c6" }
      }
    },
    "tier2": {
      "name": "Silver",
      "divisions": {
        "V": { "minXp": 1000, "maxXp": 1299,"image":"https://firebasestorage.googleapis.com/v0/b/listener-1d38a.appspot.com/o/GoatifyAssets%2FSilverV.png?alt=media&token=a24fc87d-ca4a-47d9-933c-03dfa5b2ddd1" },
        "IV": { "minXp": 1300, "maxXp": 1599,"image":"https://firebasestorage.googleapis.com/v0/b/listener-1d38a.appspot.com/o/GoatifyAssets%2FSilverIV.png?alt=media&token=5a4b440d-bf3c-42f6-b76f-eb179d013b0a"  },
        "III": { "minXp": 1600, "maxXp": 1899,"image":"https://firebasestorage.googleapis.com/v0/b/listener-1d38a.appspot.com/o/GoatifyAssets%2FSilverIII.png?alt=media&token=2b967fd4-067d-46d8-a764-bf97389b65c3"  },
        "II": { "minXp": 1900, "maxXp": 2199,"image":"https://firebasestorage.googleapis.com/v0/b/listener-1d38a.appspot.com/o/GoatifyAssets%2FSilverII.png?alt=media&token=287be214-9a3f-4ec8-9087-cfdf3b941280"  },
        "I": { "minXp": 2200, "maxXp": 2499, "image":"https://firebasestorage.googleapis.com/v0/b/listener-1d38a.appspot.com/o/GoatifyAssets%2FSilverI.png?alt=media&token=4419350f-bde1-4f8b-8661-e58f0125afd9"  }
      }
    },
    "tier3": {
      "name": "Gold",
      "divisions": {
        "V": { "minXp": 2500, "maxXp": 2899 ,"image":"https://firebasestorage.googleapis.com/v0/b/listener-1d38a.appspot.com/o/GoatifyAssets%2FGoldV.png?alt=media&token=990a644c-9afe-4ffb-8717-5e22392fa366" },
        "IV": { "minXp": 2900, "maxXp": 3299,"image":"https://firebasestorage.googleapis.com/v0/b/listener-1d38a.appspot.com/o/GoatifyAssets%2FGoldIV.png?alt=media&token=fe5f0484-6186-4ca3-a253-886496b1beae" },
        "III": { "minXp": 3300, "maxXp": 3699,"image":"https://firebasestorage.googleapis.com/v0/b/listener-1d38a.appspot.com/o/GoatifyAssets%2FGoldIII.png?alt=media&token=214f7185-cb69-4c4f-bfdc-6fa1cc229233" },
        "II": { "minXp": 3700, "maxXp": 4099 ,"image":"https://firebasestorage.googleapis.com/v0/b/listener-1d38a.appspot.com/o/GoatifyAssets%2FGoldII.png?alt=media&token=0c3edc15-06d7-4d3b-8a87-4a1cb84892c9"},
        "I": { "minXp": 4100, "maxXp": 4499 ,"image":"https://firebasestorage.googleapis.com/v0/b/listener-1d38a.appspot.com/o/GoatifyAssets%2FGoldI.png?alt=media&token=d64f41cf-eadc-47b2-95b8-0ff28bc634ce"}
      }
    },
    "tier4": {
      "name": "Platinum",
      "divisions": {
        "V": { "minXp": 4500, "maxXp": 4999 ,"image":"https://firebasestorage.googleapis.com/v0/b/listener-1d38a.appspot.com/o/GoatifyAssets%2FPlatinum5.png?alt=media&token=32c9a527-790b-4409-90c6-65822115a8e3"},
        "IV": { "minXp": 5000, "maxXp": 5499, "image":"https://firebasestorage.googleapis.com/v0/b/listener-1d38a.appspot.com/o/GoatifyAssets%2FPlatinum4.png?alt=media&token=bc61e260-d41b-43aa-a447-b671a45e5146" },
        "III": { "minXp": 5500, "maxXp": 5999 , "image":"https://firebasestorage.googleapis.com/v0/b/listener-1d38a.appspot.com/o/GoatifyAssets%2FPlatinum3.png?alt=media&token=6c95329c-3941-4e46-bb28-aa134ccaa67a"},
        "II": { "minXp": 6000, "maxXp": 6499,"image":"https://firebasestorage.googleapis.com/v0/b/listener-1d38a.appspot.com/o/GoatifyAssets%2FPlatinum2.png?alt=media&token=42a19c34-be29-4f6a-a781-94f36ab8f94f" },
        "I": { "minXp": 6500, "maxXp": 6999, "image":"https://firebasestorage.googleapis.com/v0/b/listener-1d38a.appspot.com/o/GoatifyAssets%2FPlatinum1.png?alt=media&token=a75ac140-f903-4878-8408-e977ee73b434" }
      }
    },
    "tier5": {
      "name": "Crown",
      "divisions": {
        "V": { "minXp": 7000, "maxXp": 7699,"image":"" },
        "IV": { "minXp": 7700, "maxXp": 8399,"image":"" },
        "III": { "minXp": 8400, "maxXp": 9099,"image":"" },
        "II": { "minXp": 9100, "maxXp": 9799,"image":"" },
        "I": { "minXp": 9800, "maxXp": 10000,"image":"" }
      }
    },
"tier6": {
  "name": "Ace",
  "divisions": {
    "V": { "minXp": 10001, "maxXp": 11099,"image":"" },
    "IV": { "minXp": 11100, "maxXp": 12199,"image":"" },
    "III": { "minXp": 12200, "maxXp": 13299,"image":"" },
    "II": { "minXp": 13300, "maxXp": 14399 ,"image":""},
    "I": { "minXp": 14400, "maxXp": 15499 ,"image":""}
  }
},
"tier7": {
  "name": "GOAT",
  "divisions": {
    "V": { "minXp": 15500, "maxXp": 16599,"image":"" },
    "IV": { "minXp": 16600, "maxXp": 17699 ,"image":""},
    "III": { "minXp": 17700, "maxXp": 18799,"image":"" },
    "II": { "minXp": 18800, "maxXp": 19899,"image":"" },
    "I": { "minXp": 19900, "maxXp": 21000,"image":"" }
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
  
  return { tier: "tier1", division: "V" };
}


