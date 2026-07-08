import { useTranslation } from "react-i18next";
import { Button } from "../../lib/turtle-ui/components";
import { cn } from "../../lib/turtle-ui/utils";

export const Pagination = ({ pagination, isLoading = false, className }) => {
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        "p-4 flex flex-col gap-4 border-t border-gray-200 bg-white",
        className
      )}
    >
      <div className="flex items-center justify-between gap-4 bg-white">
        <p className="text-sm font-medium text-gray-500">
          {t("datatable.page")} {pagination?.currPage || 1}
          {pagination?.totalPages && (
            <>
              {" "}
              {t("datatable.of")} {pagination?.totalPages}
            </>
          )}
        </p>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="secondary"
            title="Previous Page"
            onClick={() => {
              pagination?.onPrev();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            disabled={pagination?.currPage < 2}
          >
            {t("datatable.previos")}
          </Button>
          <Button
            size="sm"
            variant="secondary"
            title="Next Page"
            onClick={() => {
              pagination?.onNext();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            disabled={isLoading}
          >
            {t("datatable.next")}
          </Button>
        </div>
      </div>
    </div>
  );
};
