import { ContactEntity } from "./contact.entity";


describe('contact', () => {

  it("should create new Contact with arguments", () => {
    const contact = new ContactEntity({
      id: 'id', name: 'name', phone: 'phone'
    });

    expect(contact.id).toEqual('id');
    expect(contact.name).toEqual('name');
    expect(contact.phone).toEqual('phone');
  });

  it("should noot validate new Contact when name es empty", () => {
    const contact = new ContactEntity({
      id: 'id',
      phone: 'phone',
      name: ''
    });

    expect(contact.isValid()).toEqual(false);
  });

  it("should noot validate new Contact when name es empty", () => {
    const contact = new ContactEntity({
      id: 'id',
      phone: '',
      name: 'name'
    });

    expect(contact.isValid()).toEqual(false);
  });

  it("should create new Contact with arguments", () => {
    const contact = new ContactEntity({
      id: 'id', name: 'name', phone: 'phone'
    });

    expect(contact.isValid()).toEqual(true);
  });
  });
