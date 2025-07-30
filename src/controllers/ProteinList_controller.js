import ProteinProductListModel from "../Models/ProteinProductList.Model.js";

export const addProteinItem = async (req, res) => {
    try {
        const { name, protein_per_serving, serving_size } = req.body;

        if (!name || !protein_per_serving || !serving_size) {
            return res.status(400).json({ status: "failed", message: 'All Fields are required.' });
        }

        const newItem = new ProteinProductListModel({
            name: name,
            protein_per_serving,
            serving_size
        });

        const savedItem = await newItem.save();

        return res.status(200).json({ status: "success", message: 'Data Saved', data: savedItem });
    } catch (error) {
        console.error(`Error In saving Protein list: ${error}`);
        return res.status(500).json({ status: "failed", message: `Getting Error ${error}` });
    }
}
