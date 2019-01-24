class BSTNode
  attr_reader :value 
  attr_accessor :left, :right

  def initialize(value)
    @value = value 
    @left, @right = nil, nil 
  end
end
