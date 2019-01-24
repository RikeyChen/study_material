require_relative "heap"

class Array
  def heap_sort!
    2.upto(count).each do |heap_sz|
      BinaryMinHeap.heapify_up(self, heap_sz - 1, heap_sz)
    end

    count.downto(2).each do |heap_sz|
      self[0], self[heap_sz - 1] = self[heap_sz - 1], self[0]
      BinaryMinHeap.heapify_down(self, 0, heap_sz - 1)
    end

    self.reverse!
  end
end

def almost_sorted(array, k)
  ans = []
  heap = BinaryMinHeap.new
  (k + 1).times do |i|
    heap.push(array.shift) if array[0]
  end
  ans << heap.extract

  while (array.length > 0)
    heap.push(array.shift) if array[0]
    ans << heap.extract
  end

  while (heap.count > 0)
    ans << heap.extract
  end

  ans
end

arr = [3,1,6,2,5,4,8,10,7,9]
p almost_sorted(arr, 2)

