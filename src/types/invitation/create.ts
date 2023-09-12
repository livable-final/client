export interface CategoryInvitation {
  [key: string]: {
    [key: string]: CommonCategory;
  };
}

export interface CommonCategory {
  icon: string;
  title: string;
}

export interface InvitationTexts {
  purpose: string;
  invitation: string;
  header: {
    [key: string]: string;
  };
  description: {
    [key: string]: string;
  };
  button: {
    [key: string]: string;
  };
  inputPlaceholder: string;
}
