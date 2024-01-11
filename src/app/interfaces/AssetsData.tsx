export interface AssetsData {
  data: Data;
  pagination: Pagination;
}

export interface Data {
  total: number;
  clips: Clip[];
}

export interface Clip {
  ext?: string;
  displayName?: string;
  rotation?: number;
  description: any;
  source?: string;
  type?: string;
  isDemo?: boolean;
  title: any;
  importedName?: string;
  version?: number;
  duration?: number;
  createdAt?: string;
  accountId?: string;
  isDefault?: boolean;
  size?: number;
  recordedAt?: string;
  width?: number;
  id?: string;
  height?: number;
  updatedAt?: string;
  status?: string;
  assetId?: string;
  workspaceId?: string;
  hasOpenDiscussions?: boolean;
  openDiscussionCount?: number;
  assetVersionCount?: number;
  bookmarked?: boolean;
  resolution?: number;
  boardCount?: number;
  openCommentCount?: number;
  pos?: number;
  audio?: boolean;
  remote?: boolean;
  digitized?: boolean;
  hash: any;
  synced?: boolean;
  storageLocation?: string;
  avatar?: string;
  assets?: Assets;
  altResolutions?: any[];
  tags?: any[];
  permissions?: Permissions;
  ownerName?: string;
  ownerAvatar?: string;
  owner?: Owner;
  tagCount?: number;
}

export interface Assets {
  video: string;
  previewVideo: string;
  seekVideo: string;
  image: string;
  original: string;
}

export interface Permissions {
  canView: boolean;
  canDownload: boolean;
  canViewAssetVersions: boolean;
  canEditCustomFields: boolean;
  canDiscuss: boolean;
}

export interface Owner {
  ownerName: string;
  ownerAvatar: string;
}

export interface Pagination {
  hasMore: boolean;
  cursor: string;
}
