import { hotelModel } from "@/models/hotel-model";
import { replaceMongoIdInArray } from "@/service/utils/data-util";

export async function getAllhotels(){
    const hotels=await hotelModel.find().lean();
    return replaceMongoIdInArray(hotels);
}