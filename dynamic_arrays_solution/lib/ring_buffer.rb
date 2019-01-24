require_relative "static_array"

class RingBuffer
  attr_reader :length

  def initialize
    @store = StaticArray.new(8)
    @capacity, @length = 8, 0
    @start_idx = 0
  end

  # O(1)
  def [](index)
    check_index(index)
    @store[(@start_idx + index) % @capacity]
  end

  # O(1)
  def []=(index, value)
    check_index(index)
    @store[(@start_idx + index) % @capacity] = value
  end

  # O(1)
  def pop
    raise "index out of bounds" unless @length > 0
    val, self[@length - 1] = self[@length - 1], nil
    @length -= 1

    val
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    resize! if @length == @capacity

    @length += 1
    self[@length - 1] = val

    nil
  end

  # O(n): has to shift over all the elements.
  def shift
    raise "index out of bounds" unless @length > 0
    val = self[0]
    @start_idx += 1
    @length -= 1

    val
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
    resize! if @length == @capacity

    @length += 1
    @start_idx -= 1
    self[0] = val

    nil
  end

  protected
  attr_accessor :capacity, :store, :start_idx
  attr_writer :length

  def check_index(index)
    unless (index >= 0) && (index < @length)
      raise "index out of bounds"
    end
  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
    new_capacity = @capacity * 2
    new_store = StaticArray.new(new_capacity)

    @length.times {|i| new_store[i] = self[i]}

    @capacity = new_capacity
    @store = new_store
    @start_idx = 0
  end
end
