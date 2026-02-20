import { toast } from 'sonner';

export const notify = {
  addedToCart: (productName: string) =>
    toast.success('Added to cart', {
      description: `${productName} has been added.`,
    }),

  alreadyInCart: (productName: string) =>
    toast.info('Already in cart', {
      description: `${productName} is already waiting for you.`,
    }),

  removedFromCart: (productName: string) =>
    toast.info('Removed from cart', {
      description: `${productName} has been removed.`,
    }),

  addedToFavorites: (productName: string) =>
    toast.success('Added to favorites', {
      description: `${productName} added to your wishlist.`,
    }),

  removedFromFavorites: (productName: string) =>
    toast.info('Removed from favorites', {
      description: `${productName} removed from your wishlist.`,
    }),

  error: (message: string = 'Something went wrong.') =>
    toast.error('Error', { description: message }),
};
