import Stripe from 'stripe';

export interface UserDetails {
    id: string;
    first_name: string;
    last_name: string;
    full_name?: string;
    avatar_url?: string;
    billing_address?: Stripe.Address;
    payment_methods?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
}