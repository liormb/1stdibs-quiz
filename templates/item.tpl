<td><%= id %></td>
<td><%= title %></td>
<td><%= description %></td>
<td><%= dealerInternalNotes %></td>
<td><%= material.description %></td>
<td><%= material.restricted %></td>
<td><%= measurement.unit %></td>
<td><%= measurement.shape %></td>
<td><%= measurement.length %></td>
<td><%= measurement.depth %></td>
<td><%= measurement.height %></td>
<td><%= "unknown" %></td>
<td><%= condition.description %></td>
<td><a href="/delete/<%= id %>">Edit</a></td>
<td><a href="/edit/<%= id %>">Delete</a></td>