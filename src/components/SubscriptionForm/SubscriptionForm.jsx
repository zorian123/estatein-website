import './SubscriptionForm.scss'
import Icon from '../Icon'

export default () => {
	return (
		<form className="subscription-form" action="">
			<label className='subscription-form__label' htmlFor="email">Email</label>
			<input className='subscription-form__input' type="email" id="email" placeholder="Enter Your Email" />

			<button className='subscription-form__button' type="submit" title="Subscribe" aria-label="Subscribe">
				<Icon name="plane" hasFill />
			</button>
		</form>
	)
}