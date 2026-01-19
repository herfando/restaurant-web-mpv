import { X, Star } from 'lucide-react';
import { useState } from 'react';
import { useSubmitReview } from '@/query/hooks/useReview';
import type { Review } from '@/query/types/reviewType';

interface ReviewProps {
  onClose?: () => void;
  restaurantId?: number;
}

export default function Review({ onClose, restaurantId }: ReviewProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');

  // pakai hook useMutation utuh
  const submitReview = useSubmitReview();

  const handleSend = () => {
    if (rating === 0) {
      alert('Please select a rating!');
      return;
    }

    submitReview.mutate(
      {
        star: rating,
        comment,
        restaurantId: restaurantId || 0,
      },
      {
        onSuccess: () => {
          alert('Review submitted!');
          setRating(0);
          setComment('');
          if (onClose) onClose();
        },
        onError: (err: any) => {
          alert('Failed to submit review: ' + err.message);
        },
      }
    );
  };

  return (
    <div className=''>
      <section className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#FFFFFF]'>
        <div className='h-463 w-361 rounded-2xl p-16 md:h-518 md:w-439 md:px-26 md:py-24'>
          {/* Give Review */}
          <div className='flex justify-between'>
            <h3 className='md:text-xs-lh text-xl font-extrabold'>
              Give Review
            </h3>
            <X
              className='cursor-pointer'
              onClick={() => {
                if (onClose) onClose();
              }}
            />
          </div>

          <div className='flex w-full flex-col items-center'>
            {/* Give rating */}
            <div className='mt-16 flex flex-col items-center md:mt-24'>
              <p className='text-md font-extrabold'>Give Rating</p>
              <div className='flex gap-x-4'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-[27.26px] w-[28.54px] cursor-pointer md:h-[33.39px] md:w-[34.96px] ${
                      star <= (hoverRating || rating)
                        ? 'fill-[#FDB022] text-[#FDB022]'
                        : 'fill-[#A4A7AE] text-[#A4A7AE]'
                    }`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  />
                ))}
              </div>
            </div>

            {/* form */}
            <label className='mt-16 block h-235 w-329 rounded-xl border border-neutral-300 p-12 md:mt-24 md:w-391'>
              <textarea
                className='md:text-md h-full w-full text-sm'
                placeholder='Please share your thoughts about our service!'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </label>

            {/* button send */}
            <div className='mb-16 w-full md:mb-24'>
              <button
                onClick={handleSend}
                disabled={submitReview.status === 'pending'} // pakai 'pending' bukan 'loading'
                className='mt-14 h-44 w-full rounded-full bg-[#C12116] text-[#FDFDFD] hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 md:mt-24 md:h-48 md:w-391'
              >
                {submitReview.status === 'pending' ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
