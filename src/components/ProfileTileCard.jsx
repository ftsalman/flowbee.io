import { Avatar } from "../../lib/turtle-ui/components";

export const ProfileTileCard = ({
  imgUrl = "",
  head = "",
  descp = "",
  showAvatar = true,
}) => (
  <div className="flex flex-grow items-center gap-2">
    {showAvatar && (
      <Avatar
        className="size-8 flex-shrink-0"
        isLoading={false}
        imgSrc={imgUrl || "/images/avatar.png"}
      />
    )}
    <div className="flex-grow">
      <p className="line-clamp-1 break-all flex-grow">{head}</p>
      {descp && (
        <p className="line-clamp-1 break-all flex-grow text-xs text-gray-400">
          {descp}
        </p>
      )}
    </div>
  </div>
);
