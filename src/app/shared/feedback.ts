export class Feedback {
    firstname: string;
    lastname: string;
    telnum: number;
    email: string;
    agree: boolean;
    contacttype: string;
    message: string;
    push: any;
   
};

export const ContactType = ['None', 'Tel', 'Email'];