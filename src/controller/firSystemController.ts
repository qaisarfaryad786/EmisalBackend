import { Request, Response } from 'express';
import { firSystemService } from '../services';
import { firSystem } from '../interfaces';

export const addNewFirController = async (req: Request, res: Response): Promise<void> => {
  try {
    const firData: firSystem = {
      year: req.body.year,
      firNumber: req.body.firNumber,
      district: req.body.district,
      policeStation: req.body.policeStation,
      incidentDateTime: req.body.incidentDateTime,
      referenceNumber: req.body.referenceNumber,
      currentDateTime: req.body.currentDateTime,
      applicantName: req.body.applicantName,
      applicantFatherName: req.body.applicantFatherName,
      nicNumber: req.body.nicNumber,
      phoneNumber: req.body.phoneNumber,
      crime: req.body.crime,
      initialReport: req.body.initialReport,
      userId: req.body.userId
    };

    await firSystemService.saveAddNewFir(firData);
    res.status(201).json({ message: 'FIR added successfully' });
  } catch (error) {
    console.log("error",error);
    res.status(500).json({ error: 'Error adding FIR' });
  }
};
