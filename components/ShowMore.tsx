'use client';

import { CustomButton } from '@components';
import { ShowMoreProps } from '@types';
import { updateSearchParams } from '@utils';
import { useRouter } from 'next/navigation';

const ShowMore = ({ pageNumder, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumder + 1) * 10;

    const newPathName = updateSearchParams('limit', `${newLimit}`);

    router.push(newPathName);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="ShowMore"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
