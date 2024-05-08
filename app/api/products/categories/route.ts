import dbConnect from "@/lib/dbConnect";
import ProductModel from "@/lib/models/ProductModel";

export const GET = async (req: any) => {
  try {
    await dbConnect();
    const categories = await ProductModel.find().distinct("category");
    return Response.json(categories);
  } catch (error) {
    console.error(error); // Log the error for debugging
    return Response.json({ error: "Internal server error" }, { status: 500 }); // Return a generic error message with a 500 status code
  }
};
