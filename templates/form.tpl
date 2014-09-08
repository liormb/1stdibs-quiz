<form id="form" class="form" role="form">
	<div class="title input-group">
		<label class="bold" for="title">Title</label>
		<input id="title" class="form-control" type="text">
	</div>

	<div class="description input-group">
		<label class="bold" for="description">Description</label>
		<textarea name="description" id="description" class="form-control" cols="30" rows="10"></textarea>
	</div>

	<div class="internal-notes input-group">
		<label class="bold" for="internal-notes">Internal Notes</label>
		<textarea name="internal-notes" id="internal-notes" class="form-control" cols="30" rows="1"></textarea>
	</div>

	<div class="materials input-group">
		<label class="bold" for="materials">Matirials</label>
		<select name="material" id="material">
			<option value="" selected disabled>Select...</option>
		</select>
	</div>

	<div class="restricted-matirials input-group">	
		<div class="item">
			<input id="restricted-matirials" type="checkbox" name="restricted-matirials" value="Y">
			<label class="bold" for="restricted-matirials">Check this box <span>if the listing contains restricted matirials</span></label>
		</div>
	</div>

	<div class="measurements input-group">
		<label class="bold">Measurements</label>
		<div id="measurements" class="item">
			<label for="">Measurements are in:</label>
		</div>
		<div id="measured" class="item">
			<label for="">Measured item is:</label>
		</div>
	</div>

	<div id="variables" class="input-group item">
		<div class="block-item">
			<div class="length input-group">
				<label for="length" class="disabled">Length:</label>
				<div class="input-append">
					<input id="length" class="span2" type="text" disabled>
					<span class="add-on">in.</span>
				</div>
			</div>
			<div class="height input-group">
				<label for="height" class="disabled">Height:</label>
				<div class="input-append">
					<input id="height" class="span2" type="text" disabled>
					<span class="add-on">in.</span>
				</div>
			</div>
		</div>
		<div class="block-item">
			<div class="depth input-group">
				<label for="depth" class="disabled">Depth:</label>
				<div class="input-append">
					<input id="depth" class="span2" type="text" disabled>
					<span class="add-on">in.</span>
				</div>
			</div>
			<div class="diameter input-group">
				<label for="diameter" class="disabled">Diameter:</label>
				<div class="input-append">
					<input id="diameter" class="span2" type="text" disabled>
					<span class="add-on">in.</span>
				</div>
			</div>
		</div>
	</div>
		
	<div class="condition input-group">
		<label class="bold" for="condition">Condition <span class="inline normal italic">( Select one )</span></label>
		<div id="condition" class="item"></div>
	</div>

	<input class="btn btn-primary" type="submit" value="Save">
	<input id="cancel-btn" class="btn btn-danger" type="button" value="Cancel">
</form>