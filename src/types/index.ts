export interface SubmitRequest {
  phone: string;
  contactName: string;
}

export interface SubmitResponse {
  success: boolean;
  message: string;
}

export type FormState = "idle" | "loading" | "success" | "error";
