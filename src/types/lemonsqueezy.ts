export interface RelationshipLinks {
  self: string;
  related: string;
}

export interface LemonsqueezyRelationship {
  links: RelationshipLinks;
}

export interface LemonsqueezyRelationships {
  order: LemonsqueezyRelationship;
  store: LemonsqueezyRelationship;
  product: LemonsqueezyRelationship;
  variant: LemonsqueezyRelationship;
  customer: LemonsqueezyRelationship;
  orderItem: LemonsqueezyRelationship;
  subscriptionItems: LemonsqueezyRelationship;
  subscriptionInvoices: LemonsqueezyRelationship;
}

export interface LemonsqueezySubscriptionAttributes {
  user_id: string | null | undefined;
  store_id: number;
  customer_id: number;
  order_id: number;
  total: number;
  order_item_id: number;
  product_id: number;
  variant_id: number;
  product_name: string;
  variant_name: string;
  user_name: string;
  user_email: string;
  status: string;
  status_formatted: string;
  card_brand: string;
  card_last_four: string;
  pause: string | null;
  cancelled: boolean;
  trial_ends_at: string | null;
  billing_anchor: number;
  urls: {
    update_payment_method: string;
  };
  renews_at: string;
  ends_at: string | null;
  created_at: string;
  updated_at: string;
  test_mode: boolean;
}

export interface LemonsqueezyOrderAttributes {
  first_subscription_item: {
    id: number;
    subscription_id: number;
    price_id: number;
  };
}

export interface LemonsqueezyWebhookPayload {
  meta: {
    test_mode: boolean;
    event_name:
      | "subscription_created"
      | "subscription_updated"
      | "subscription_cancelled"
      | "order_created";
    custom_data: {
      user_id: string;
    };
  };
  data: {
    id: string;
    type: string;
    attributes:
      | LemonsqueezySubscriptionAttributes
      | LemonsqueezyOrderAttributes;
    relationships: LemonsqueezyRelationships;
  };
}
