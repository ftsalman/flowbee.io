import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { sortArr } from "../../utils/utils";
import { POSITION_VARIENTS } from "./DataTableUtils";
const IconFilterAlt2 = ({ size = "16" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 18L4 10H20L12 18Z" fill="currentColor"/>
  </svg>
);
import { useTranslation } from "react-i18next";
import EmptyBlock from "../EmptyBlock";
import { EmptyMessage } from "../EmptyMessage";
import { Pagination } from "../Pagination";
import { cn } from "../../../lib/turtle-ui/utils";

const renderRowItems = (columns, dataItem, columnIndex, emptyMsg = "") => {
  return (
    <>
      {columns?.map((column) => {
        const {
          id,
          key,
          render,
          isFixed,
          isLeftFixed = true,
          align,
          className,
          renderValue,
        } = column;

        return (
          <td
            className={`fixed-td border-b border-gray-100 ${
              isFixed && isLeftFixed
                ? "sticky left-0 z-20"
                : isFixed && !isLeftFixed && "sticky right-0 z-20"
            } relative w-inherit`}
            key={id}
            title={dataItem[key]}
          >
            {render ? (
              render(dataItem, column, columnIndex)
            ) : (
              <div
                className={cn(
                  `min-h-14 min-w-[200px] max-w-[300px] px-4 py-2 flex items-center ${POSITION_VARIENTS[align]}`,
                  className
                )}
              >
                {renderValue
                  ? renderValue(dataItem, column, columnIndex)
                  : dataItem[key] || (
                      <EmptyMessage icon="" message={emptyMsg} />
                    )}
              </div>
            )}
          </td>
        );
      })}
    </>
  );
};

export const DataTable = ({
  columns = [],
  data = [],
  isLoading = true,
  onRowClick = null,
  onSort = null,
  className = "",
  containerClassName = "",
  tableClasses = {
    thead: "",
  },
  emptyStateConfig = {
    containerClassName: "",
  },
  pagination = null,
  children = null,
  footer = null,
  header = null,
  tfoot = null,
}) => {
  const { t } = useTranslation();

  const [inlineSort, setInlineSort] = useState({
    sortKey: "",
    sortType: null, // true | false | null
  });

  const handleRowClick = (e, data) => {
    e.stopPropagation();
    if (!onRowClick) return;
    onRowClick?.(data);
  };

  const handleSort = () => {
    const { sortKey, sortType } = inlineSort;
    if (sortType === null) return data;
    if (onSort) {
      return onSort(sortKey, sortType, data);
    }
    return sortArr([...data], sortKey, sortType);
  };

  const handleSortBtnClick = ({ isSortable, key }) => {
    if (!isSortable) return false;

    let currSortType = inlineSort.sortType;

    if (currSortType === null) {
      currSortType = true;
    } else if (currSortType === true) {
      currSortType = false;
    } else if (currSortType === false) {
      currSortType = null;
    }

    setInlineSort((prev) => ({
      ...prev,
      sortKey: key,
      sortType: currSortType,
    }));
  };

  const tableData = handleSort();

  return (
    <>
      <div
        className={cn(
          `w-full max-w-full max-h-full rounded-xl flex flex-col border-2 border-gray-200 bg-white/50`,
          className
        )}
      >
        {header}

        <div
          className={cn(
            `w-full max-w-full max-h-full rounded-xl overflow-auto table-Scrollbar ${
              isLoading ? "overflow-hidden" : "overflow-auto"
            }`,
            containerClassName
          )}
        >
          <table className="main-table min-w-full table-auto text-sm text-gray-800">
            <thead
              className={cn(
                "sticky top-0 z-30 h-6 bg-gray-50",
                tableClasses?.thead
              )}
            >
              <tr>
                {columns?.map((column) => {
                  const {
                    id,
                    head,
                    isSortable,
                    isFixed,
                    isLeftFixed = true,
                    align,
                    key,
                  } = column;
                  return (
                    <th
                      key={id}
                      onClick={() => handleSortBtnClick(column)}
                      className={`${isSortable && "cursor-pointer"} ${
                        isFixed && isLeftFixed
                          ? "sticky left-0 z-10 bg-[#F8FAFC]"
                          : isFixed &&
                            !isLeftFixed &&
                            "sticky right-0 z-30 bg-[#F8FAFC]"
                      } relative whitespace-nowrap group text-left duration-300`}
                      title={head}
                    >
                      <div
                        className={`flex items-center ${POSITION_VARIENTS[align]} gap-3 px-4 py-3 border-b border-gray-200 `}
                      >
                        <div className={`font-medium text-base  text-gray-600`}>
                          {head || t("datatable.empty")}
                        </div>
                        {isSortable &&
                          inlineSort?.sortKey === key &&
                          inlineSort?.sortType !== null && (
                            <span
                              className={`flex-shrink-0 ${
                                {
                                  true: "rotate-180",
                                  false: "rotate-0",
                                  null: "rotate-0",
                                }[inlineSort?.sortType]
                              }`}
                            >
                              <IconFilterAlt2 size="9" />
                            </span>
                          )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <>
                  {Array.from({ length: 20 }, (_, index) => {
                    return (
                      <Fragment key={index}>
                        <tr className="bg-white border-b border-gray-100">
                          {columns?.map((_, index) => (
                            <td key={index} className="h-11 px-4 py-2">
                              <div className=" w-full h-3 flex items-center justify-center rounded-full bg-gray-300 animate-pulse "></div>
                            </td>
                          ))}
                        </tr>
                      </Fragment>
                    );
                  })}
                </>
              ) : // ) : (
              tableData.length === 0 ? (
                <tr>
                  <td colSpan={columns.length}>
                    <EmptyBlock
                      showPrimaryBtn={!!emptyStateConfig?.onPrimaryClick}
                      title={t("emptyblocks.nodatafound")}
                      {...emptyStateConfig}
                    />
                  </td>
                </tr>
              ) : (
                <>
                  {children ? (
                    children({
                      data: tableData,
                      onRenderItems: renderRowItems,
                    })
                  ) : (
                    <>
                      {tableData?.map((data, index) => {
                        return (
                          <Fragment key={index}>
                            <tr
                              onClick={(e) => handleRowClick(e, data)}
                              className={`min-h-11 bg-white ${
                                onRowClick &&
                                "cursor-pointer hover:bg-gray-100 clickable-row"
                              } duration-300`}
                            >
                              {renderRowItems(
                                columns,
                                data,
                                index,
                                t("datatable.notavailable")
                              )}
                            </tr>
                          </Fragment>
                        );
                      })}
                    </>
                  )}
                </>
              )}
            </tbody>
          </table>
          {tfoot}
        </div>

        {footer}

        {pagination && <Pagination pagination={pagination} />}
      </div>
    </>
  );
};

DataTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  onRowClick: PropTypes.array,
  isLoading: PropTypes.bool,
  pagination: PropTypes.shape({
    onPrev: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    currPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
  }),
  showPagination: PropTypes.bool,
  className: PropTypes.string,
  emptyStateConfig: PropTypes.object,
  containerClassName: PropTypes.string,
  onSort: PropTypes.func,
  tableClasses: PropTypes.shape({
    thead: PropTypes.string,
  }),
  footer: PropTypes.node,
  header: PropTypes.node,
  tfoot: PropTypes.node,
};
