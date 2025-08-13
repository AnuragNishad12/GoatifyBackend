import mongoose from 'mongoose';


const DivisionSchema = new mongoose.Schema({
  minXp: { type: Number, required: true },
  maxXp: { type: Number, required: true }
}, { _id: false }); 


const TierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  divisions: {
    V: { type: DivisionSchema, required: true },
    IV: { type: DivisionSchema, required: true },
    III: { type: DivisionSchema, required: true },
    II: { type: DivisionSchema, required: true },
    I: { type: DivisionSchema, required: true }
  }
}, { _id: false });

const TiersConfigSchema = new mongoose.Schema({
  tiers: {
    tier1: { type: TierSchema},
    tier2: { type: TierSchema },
    tier3: { type: TierSchema },
    tier4: { type: TierSchema },
    tier5: { type: TierSchema },
    tier6: { type: TierSchema },
    tier7: { type: TierSchema },
  }
}, { timestamps: true });

const TiersConfigSchemaExport = mongoose.model("TiersConfigSchema",TiersConfigSchema);
export default TiersConfigSchemaExport;