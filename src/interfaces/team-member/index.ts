import { FileInterface } from 'interfaces/file';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface TeamMemberInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
  unique_code: string;
  created_at?: any;
  updated_at?: any;
  file?: FileInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    file?: number;
  };
}

export interface TeamMemberGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
  unique_code?: string;
}
