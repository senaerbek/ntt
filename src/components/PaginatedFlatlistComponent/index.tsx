import React, { useState } from 'react';
import { FlatList, FlatListProps } from 'react-native';

interface PaginatedFlatListProps<T> extends FlatListProps<T> {
  itemsPerPage: number;
  data: T[];
}

export function PaginatedFlatList<T>(props: PaginatedFlatListProps<T>) {
  const { itemsPerPage, data } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [dataToShow, setDataToShow] = useState(data.slice(0, itemsPerPage));

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * itemsPerPage;
    const endIndex = nextPage * itemsPerPage;
    const newData = data.slice(startIndex, endIndex);

    if (newData.length > 0) {
      setCurrentPage(nextPage);
      setDataToShow([...dataToShow, ...newData]);
    }
  };

  return (
    <FlatList
      {...props}
      data={dataToShow}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.1}
    />
  );
}

