import contactService from "../services/contactService";
import fileService from "../services/fileService";
import noteService from "../services/noteService";
import photoService from "../services/photoService";
import taskService from "../services/taskService";
import { add } from "@pasa-soft/utils";

class ContactController {
    public getContact() {
        return Number(add()) * 2
    }

    public getContacts() {}

    public deleteContact() {}

    public createContact() {}

    public updateContact() {}
    
    public importContact() {}

    public getContactStatistics() {}

    public getContactNotes() {}

    public addContactNote() {}

    public updateContactNote() {}

    public deleteContactNote() {}

    public getContactFiles() {}

    public createContactFile() {}

    public deleteContactFile() {}

    public getContactPhotos() {}

    public createContactPhoto() {}

    public deleteContactPhoto() {}

    public getContactTasks() {}

    public createContactTask() {}

    public deleteContactTask() {}
}



export default ContactController;