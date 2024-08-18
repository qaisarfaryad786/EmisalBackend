import { firSystem } from '../interfaces';
import { firSystemModel } from '../models';

export const saveAddNewFir = async (firData: firSystem): Promise<void> => {
  try {
    const addNewFir = new firSystemModel(firData);
    await addNewFir.save();
  } catch (error) {
    console.error('Error saving FIR:', error); // Log the error details
    throw error; // Rethrow the error to be caught by the controller
  }
};
