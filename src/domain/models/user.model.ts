export class User {
	private readonly name: string;
	private readonly email: string;
	private readonly password: string;
	private readonly passwordConfirm: string;
	private readonly photo: string;
	private readonly role: string;
	private readonly passwordChangedAt: Date;
	private readonly passwordResetToken: string;
	private readonly passwordResetExpires: Date;
	private readonly active: boolean;

	constructor(
		name: string,
		email: string,
		password: string,
		passwordConfirm: string,
		photo: string,
		passwordChangedAt: Date,
		passwordResetToken: string,
		passwordResetExpires: Date,
		active: boolean
	) {
		this.name = name;
		this.email = email;
		this.password = password;
		this.passwordConfirm = passwordConfirm;
		this.photo = photo;
		this.passwordChangedAt = passwordChangedAt;
		this.passwordResetToken = passwordResetToken;
		this.passwordResetExpires = passwordResetExpires;
		this.active = active;
	}
}
