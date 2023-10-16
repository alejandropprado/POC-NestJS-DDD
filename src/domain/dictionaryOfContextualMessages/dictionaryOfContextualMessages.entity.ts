import { IAudit } from '../audit/audit.entity';

export interface IDictionaryOfContextualMessages extends IAudit {
  id?: string;
  name: string;
  icon: string;
  comments: Record<string, IComment>;
  textEmail: Record<string, ITextEmail>;
}

interface IComment {
  comment: string;
  description: string;
  color: string;
}

interface ITextEmail {
  approved: string;
  rejected: string;
}
