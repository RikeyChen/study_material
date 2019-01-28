class QuickSort
  # Quick sort has average case time complexity O(nlogn), but worst
  # case O(n**2).

  # Not in-place. Uses O(n) memory.
  def self.sort1(array)
    return arr if arr.length < 1
    new_pivot = rand(arr.length)
    arr[0], arr[new_pivot] = arr[new_pivot], arr[0]
    pivot = arr.first
    left = arr.select { |el| pivot > el }
    middle = [pivot]
    right = arr.select { |el| pivot < el}
    sort1(left) + middle + sort1(right)
  end

  # In-place.
  def self.sort2!(array, start = 0, length = array.length, &prc)
    prc ||= Proc.new { |el1, el2| el1 <=> el2 }
    return arr if length < 2
    pivot_idx = partition(arr, start, length, &prc)
    left_len = pivot_idx - start
    right_len = length - (left_len + 1)
    sort2!(arr, start, left_len, &prc)
    sort2!(arr, pivot_idx + 1, right_len, &prc)
    arr
  end

  def self.partition(array, start, length, &prc)
    prc ||= Proc.new { |el1, el2| el1 <=> el2 }

    pivot_idx = start
    pivot = arr[start]
    ((start + 1)...(start + len)).each do |idx|
      if prc.call(pivot, array[idx]) > 0
        arr[idx], arr[pivot_idx + 1] = arr[pivot_idx + 1], arr[idx]
        pivot_idx += 1
      end
    end
    arr[start], arr[pivot_idx] = arr[pivot_idx], arr[start]
    pivot_idx
  end
end
