// Importing the Firestore functions (modules) you'll need
import { 
  collection,   // Used to reference a collection
  doc,          // Used to reference a document
  getDoc,       // Used to get a single document
  getDocs,      // Used to get multiple documents
  addDoc,       // Used to add a new document
  updateDoc,    // Used to update an existing document
  deleteDoc     // Used to delete a document
} from 'firebase/firestore';

import { db } from '../library/firebase'; // Importing an isntance of our database so that the service can knows which database to talk to
import { Cafe } from '../types/cafe'; // Tells TypeScript about what a Cafe should look like

const cafesCollection = collection(db, 'cafes'); // Referencing the 'cafes' collection in our database

// Get all cafes
export const getAllCafes = async (): Promise<Cafe[]> => {
  const snapshot = await getDocs(cafesCollection);
  const cafes = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Cafe[];
  return cafes;
};


// Getting a single cafe

// Get a cafe by ID

// Update Cafe ((id: string, updatedFields: Partial<Cafe>))