import { IconCircle } from "../../lib/turtle-ui/assets/icons/InterfaceIcons";
import { Avatar } from "../../lib/turtle-ui/components";
import { getMediaUrl } from "../utils/utils";

export const StudentOption = ({ data }) => (
  <div className="flex-grow flex items-center gap-2">
    <Avatar
      className="size-8 flex-shrink-0"
      isLoading={false}
      imgSrc={getMediaUrl(data?.PROFILE_PHOTO) || "/images/avatar.png"}
      imgProps={{
        onError: (e) => {
          e.target.src = "/images/avatar.png";
        },
      }}
    />
    <div className="flex-grow">
      <p className="break-all line-clamp-1 text-gray-800">{data?.NAME}</p>
      <div className="mt-0.5 flex items-center gap-1.5">
        <p className="leading-tight break-all line-clamp-1 text-xs text-gray-400">
          {data?.MOBILE}
        </p>
        <div className="flex-shrink-0 text-gray-400">
          <IconCircle filled size="4" />
        </div>
        <p className="leading-tight break-all line-clamp-1 text-xs text-gray-400">
          {data?.EMAIL}
        </p>
      </div>
    </div>
  </div>
);
