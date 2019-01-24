class DynamicProgramming
  attr_accessor :blair_cache

  def initialize
    @blair_cache = {1 => 1, 2 => 2}
    @frog_cache = [[[]], [[1]], [[1, 1], [2]]]
    @maze_cache = {}
  end

  def blair_nums(n)
    return @blair_cache[n] if @blair_cache[n]
    odd_num = 2 * (n - 1) - 1
    @blair_cache[n] = blair_nums(n-1) + blair_nums(n-2) + odd_num
  end

  def frog_hops_bottom_up(n)
    frog_cache_builder(n)[n]
  end

  def frog_cache_builder(n)
    ways_collection = [[[]], [[1]], [[1, 1], [2]]]

    return ways_collection if n < 3

    (3..n).each do |i|
      new_way_set = []
      (1..3).each do |first_step|
        ways_collection[i - first_step].each do |way|
          new_way = [first_step]
          way.each do |step|
            new_way << step
          end
          new_way_set << new_way
        end
      end
      ways_collection << new_way_set
    end

    ways_collection
  end

  # def frog_hops_top_down(n)
  #   @frog_cache = [[[]], [[1]], [[1, 1], [2]]]
  #   frog_hops_top_down_helper(n)
  # end

  # def frog_hops_top_down_helper(n)
  #   return @frog_cache[n] if @frog_cache[n]
  #   new_way_set = []
  #   (1..3).each do |first_step|
  #     frog_hops_top_down_helper(n - first_step).each do |way|
  #       new_way = [first_step]
  #       way.each do |step|
  #         new_way << step
  #       end
  #       new_way_set << new_way
  #     end
  #   end
  #   @frog_cache[n] = new_way_set
  # end

  # def super_frog_hops(n, k)
  #   ways_collection = [[[]], [[1]]]

  #   return ways_collection[n] if n < 2

  #   (2..n).each do |i|
  #     new_way_set = []
  #     (1..k).each do |first_step|
  #       break if i - first_step < 0
  #       ways_collection[i - first_step].each do |way|
  #         new_way = [first_step]
  #         way.each do |step|
  #           new_way << step
  #         end
  #         new_way_set << new_way
  #       end
  #     end
  #     ways_collection << new_way_set
  #   end

  #   ways_collection[n]
  # end

#   def knapsack(weights, values, capacity)
#     return 0 if capacity == 0 || weights.length == 0
#     solution_table = knapsack_table(weights, values, capacity)
#     solution_table[weights.length - 1][-1]
#   end

#   # Helper method for bottom-up implementation
#   def knapsack_table(weights, values, capacity)
#     solution_table = []
#     (0...weights.length).each do |treasure_idx|
#       solution_table << []
#       (0..capacity).each do |current_capacity|
#         current_weight = weights[treasure_idx]
#         current_value = values[treasure_idx]

#         remaining_capacity = current_capacity - current_weight

#         take_treasure_value = nil
#         dont_take_treasure_value = nil

#         if remaining_capacity < 0
#           take_treasure_value = -1
#         else
#           previous_best = nil
#           if treasure_idx - 1 < 0
#             previous_best = 0
#           else
#             previous_best = solution_table[treasure_idx - 1][remaining_capacity]
#           end
#           take_treasure_value = current_value + previous_best
#         end

#         if treasure_idx - 1 >= 0
#           dont_take_treasure_value = solution_table[treasure_idx - 1][current_capacity]
#         else
#           dont_take_treasure_value = 0
#         end

#         best_option = [take_treasure_value, dont_take_treasure_value].max
#         solution_table[treasure_idx] << best_option
#       end
#     end

#     solution_table
#   end

#   def maze_solver(maze, start_pos, end_pos)
#     @maze_cache = {}
#     dfs_builder(maze, start_pos, end_pos, [start_pos], 0)
#     @best_path
#   end


#   def dfs_builder(maze, start_pos, end_pos, this_path, steps)
#     if start_pos == end_pos
#       @best_path = this_path if !@maze_cache[end_pos] || steps < @maze_cache[end_pos]
#     end
#     @maze_cache[start_pos] = steps
#     get_moves(maze, start_pos).each do |next_pos|
#       next if @maze_cache[next_pos] && @maze_cache[next_pos] < steps + 1
#       dfs_builder(maze, next_pos, end_pos, this_path + [next_pos], steps + 1)
#     end
#   end

#   def get_moves(maze, from_pos)
#     directions = [[0, 1], [1, 0], [-1, 0], [0, -1]]
#     x, y = from_pos
#     result = []

#     directions.each do |dx, dy|
#       new_loc = [x + dx, y + dy]
#       result << new_loc if is_valid_pos?(maze, new_loc)
#     end

#     result
#   end

#   def is_valid_pos?(maze, pos)
#     x, y = pos
#     x >= 0 && y >= 0 && x < maze.length && y < maze.first.length && maze[x][y] != "X"
#   end
end
