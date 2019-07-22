export interface Credential {
  credentialId: BufferSource;
  publicKey: BufferSource;
}

export interface User {
  id?: string;
  email: string;
  password: string;
  // TODO
  credentials: Credential[];
}
