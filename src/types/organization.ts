export interface OrganizationDetails {
  name: string;
  representative: string;
  phone: string;
  email: string;
  address: {
    postal: string;
    full: string;
  };
}

export const organizationInfo: OrganizationDetails = {
  name: "亀川プロジェクト",
  representative: "宮本裕治",
  phone: "08087369267",
  email: "kamegawaeetoko@gmail.com",
  address: {
    postal: "〒874-0022",
    full: "大分県別府市亀川東町２２−１１ イノベーションスペース 別府 かめや"
  }
};