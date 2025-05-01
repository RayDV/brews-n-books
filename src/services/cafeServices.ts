// Importing the Firestore functions (modules) you'll need
import { 
  collection,   // Used to reference a collection
  doc,          // Used to reference a document
  getDoc,       // Used to get a single document
  getDocs,      // Used to get multiple documents
  addDoc,       // Used to add a new document
  serverTimestamp, // Used to add timestamps to the document
  updateDoc,    // Used to update an existing document
  deleteDoc     // Used to delete a document
} from 'firebase/firestore';

import { db } from '../library/firebase'; // Importing an isntance of our database so that the service can knows which database to talk to
import { Cafe } from '../types/cafe'; // Tells TypeScript about what a Cafe should look like

const cafesCollection = collection(db, 'cafes'); // Referencing the 'cafes' collection in our database

// Get all cafes
export const getAllCafes = async (): Promise<Cafe[]> => {
  // Fetch all documents from the 'cafes' collection (QuerySnapshot)
  const snapshot = await getDocs(cafesCollection);

  // Transform the snapshot into an array of Cafe objects
  const cafes = snapshot.docs.map(doc => ({
    id: doc.id,            // Get the document ID
    ...doc.data()          // Get the rest of the cafe data
  })) as Cafe[];

  // Return the array of cafes
  return cafes;
};

// Getting a single cafe (by ID)
export const getCafeById = async (id: string): Promise<Cafe | null> => {
  // Create a reference to the specific cafe using its ID
  const cafeRef = doc(db, 'cafes', id);

  // Use getDoc to fetch the document from Firestore
  const snapshot = await getDoc(cafeRef);

  // If it exists return the cafe with its ID
  if (snapshot.exists()) {
    return {
      id: snapshot.id,
      ...snapshot.data()
    } as Cafe;
  }

  // Return null if the document doesn't exist
  return null;
};

// Add a new cafe
export const addNewCafe = async (cafeData: Omit<Cafe, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
  // Prepare the data by adding timestamps
  try {
    const cafeWithTimestamps = {
      ...cafeData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    // Add the new cafe to the 'cafes' collection
    const newCafeRef = await addDoc(cafesCollection, cafeWithTimestamps);

    // Return the new cafe's ID
    return newCafeRef.id;
    
  } catch (error) {
    console.error('Error adding new cafe:', error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
};

// Update Cafe ((id: string, updatedFields: Partial<Cafe>))

// Delete Cafe (id: string)