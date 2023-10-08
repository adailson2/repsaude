import mongoose, { Schema, Document } from 'mongoose';

export interface ILead extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  source: string;
  status: string;
  createdAt: Date;
}

const leadSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  email: { type: String, required: false, unique: true },
  phone: { type: String, required: false },
  company: { type: String, required: false },
  source: { type: String, required: false },
  status: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<ILead>('Lead', leadSchema);
