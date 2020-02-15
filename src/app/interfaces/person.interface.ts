import { Comment } from './comment.interface';

export interface Person {
  id?: number;
  name: string;
  username: string;
  avatar: string;
  service: string;
  rate: number;
  comments: Comment[];
}
