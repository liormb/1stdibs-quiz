<td><%= id || cid %></td>
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
<td><a class="action" href="./edit/<%= id || cid %>">Edit</a></td>
<td><a class="action" href="./delete/<%= id || cid %>">Delete</a></td>