require_relative 'graph'
require 'set'

# Kahn's
# O(|V| + |E|).
# def topological_sort(vertices)
#     queue = []
#     in_edges = {}
#     order = []

#     vertices.each do |vertex|
#         in_edge_cost = vertex.in_edges.reduce(0) {|accum, edge| accum += edge.cost}
#         in_edges[vertex] = in_edge_cost
#         queue << vertex if in_edge_cost == 0
#     end

#     until queue.empty?
#         vertex = queue.shift

#         vertex.out_edges.each do |edge|
#             to_vertex = edge.to_vertex 
#             in_edges[to_vertex] -= edge.cost
#             queue << to_vertex if in_edges[to_vertex] == 0
#         end

#         order << vertex
#     end

#     order.length == vertices.length ? order : []
# end

# Tarjans

def topological_sort(vertices)
    order = []
    explored = Set.new
    temp = Set.new 
    cycle = false

    vertices.each do |vertex|
        cycle = dfs!(vertex, explored, order, temp, cycle) unless explored.include?(vertex)
        return [] if cycle
    end

    order
end

def dfs!(vertex, explored, order, temp, cycle)
    return true if temp.include?(vertex)
    temp.add(vertex)
    explored.add(vertex)

    vertex.out_edges.each do |edge|
        to_vertex = edge.to_vertex
        dfs!(to_vertex, explored, order, temp, cycle) unless explored.include?(to_vertex)
    end

    order.unshift(vertex)
    temp.delete(vertex)
    false
end
