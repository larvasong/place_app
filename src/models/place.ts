import { UserModel } from './user';
export class PlaceModel {
  user: UserModel;

  images: string;
  placeName: string;
  address: string;
  subject: string;
  desc: string;
  likeCnt: number;
  commentCnt: number;
  writeTime: Date;
  latitude: number;
  longitude: number;
}
