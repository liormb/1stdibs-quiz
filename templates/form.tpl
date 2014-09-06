<form id="form" class="form" role="form">
		<label class="bold" for="title">Title</label>
		<input id="title" class="form-control" type="text">

		<label class="bold" for="description">Description</label>
		<textarea name="description" id="description" class="form-control" cols="30" rows="10"></textarea>

		<label class="bold" for="internal-notes">Internal Notes</label>
		<input id="internal-notes" class="form-control" type="text">

		<label class="bold" for="materials">Matirials</label>
		<select name="materials" id="materials">
			<option selected disabled>Select...</option>
		</select>
		
		<div class="item">
			<input id="restricted-matirials" type="checkbox" name="" value="restricted-matirials">
			<label class="bold" for="restricted-matirials">Check this box <span>if the listing contains restricted matirials</span></label>
		</div>

		<label class="bold">Measurements</label>
		<div id="measurements" class="item">
			<label for="">Measurements are in:</label>
		</div>
		<div id="measured" class="item">
			<label for="">Measured item is:</label>
		</div>

		<div id="variables" class="item">
			<div class="block-item">
				<label for="length" class="disabled">Length:</label>
				<input id="length" class="form-control" type="text" disabled>
				<label for="height" class="disabled">Height:</label>
				<input id="height" class="form-control" type="text" disabled>
			</div>
			<div class="block-item">
				<label for="depth" class="disabled">Depth:</label>
				<input id="depth" class="form-control" type="text" disabled>
				<label for="diameter" class="disabled">Diameter:</label>
				<input id="diameter" class="form-control" type="text" disabled>
			</div>
		</div>
		
		<label class="bold" for="condition">Condition <span class="inline normal italic">( Select one )</span></label>
		<div id="condition" class="item"></div>

		<input class="btn btn-primary" type="submit" value="Save">
</form>