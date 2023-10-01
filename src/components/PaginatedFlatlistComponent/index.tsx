import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, FlatListProps } from 'react-native';

interface PaginatedFlatListProps<T> extends FlatListProps<T> {
  itemsPerPage: number;
  data: T[];
}

export function PaginatedFlatList<T>(props: PaginatedFlatListProps<T>) {
  const { itemsPerPage, data } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [dataToShow, setDataToShow] = useState([]);

  const handleLoadMore = useCallback(() => {
    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * itemsPerPage;
    const endIndex = nextPage * itemsPerPage;
    const newData = data.slice(startIndex, endIndex);

    if (newData.length > 0) {
      setCurrentPage(nextPage);
      setDataToShow([...dataToShow, ...newData]);
    }
  }, [currentPage, itemsPerPage, data, dataToShow]);

  useEffect(() => {
    setDataToShow(data.slice(0, itemsPerPage));
  }, [data, itemsPerPage]);

  return (
    <FlatList
      {...props}
      data={dataToShow}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.1}
    />
  );
}

