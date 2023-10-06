import {
  InvitationParkingStore,
  PostInvitationParkingData,
} from '@/types/invitation/api';
import { create } from 'zustand';

export const parkingState: PostInvitationParkingData = {
  carNumber: '',
};

const useInvitationParkingStore = create<InvitationParkingStore>((set) => ({
  carNumber: parkingState,
  setCarNumber: (number) => {
    set(() => ({
      carNumber: {
        carNumber: number,
      },
    }));
  },
}));

export default useInvitationParkingStore;
