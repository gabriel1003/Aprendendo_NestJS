
export class ContactEntity {

  readonly id: string;

  readonly name: string;

  readonly phone: string;

  constructor(args: {
    id: string, name: string, phone: string
  }) {
    this.id = args.id;
    this.name = args.name;
    this.phone = args.phone;
  }

  isValid(): boolean {

    return !!this.id && !!this.name && !!this.phone && this.name.trim() !== '' && this.phone.trim() !== '';
  }

}