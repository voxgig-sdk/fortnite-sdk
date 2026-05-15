# Fortnite SDK context

require_relative '../utility/struct/voxgig_struct'
require_relative 'control'
require_relative 'operation'
require_relative 'spec'
require_relative 'result'
require_relative 'response'
require_relative 'error'
require_relative 'helpers'

class FortniteContext
  attr_accessor :id, :out, :client, :utility, :ctrl, :meta, :config,
                :entopts, :options, :entity, :shared, :opmap,
                :data, :reqdata, :match, :reqmatch, :point,
                :spec, :result, :response, :op

  def initialize(ctxmap = {}, basectx = nil)
    ctxmap ||= {}
    @id = "C#{rand(10000000..99999999)}"
    @out = {}

    @client = FortniteHelpers.get_ctx_prop(ctxmap, "client") || basectx&.client
    @utility = FortniteHelpers.get_ctx_prop(ctxmap, "utility") || basectx&.utility

    @ctrl = FortniteControl.new
    ctrl_raw = FortniteHelpers.get_ctx_prop(ctxmap, "ctrl")
    if ctrl_raw.is_a?(Hash)
      @ctrl.throw_err = ctrl_raw["throw"] if ctrl_raw.key?("throw")
      @ctrl.explain = ctrl_raw["explain"] if ctrl_raw["explain"].is_a?(Hash)
    elsif basectx&.ctrl
      @ctrl = basectx.ctrl
    end

    m = FortniteHelpers.get_ctx_prop(ctxmap, "meta")
    @meta = m.is_a?(Hash) ? m : (basectx&.meta || {})

    cfg = FortniteHelpers.get_ctx_prop(ctxmap, "config")
    @config = cfg.is_a?(Hash) ? cfg : basectx&.config

    eo = FortniteHelpers.get_ctx_prop(ctxmap, "entopts")
    @entopts = eo.is_a?(Hash) ? eo : basectx&.entopts

    o = FortniteHelpers.get_ctx_prop(ctxmap, "options")
    @options = o.is_a?(Hash) ? o : basectx&.options

    e = FortniteHelpers.get_ctx_prop(ctxmap, "entity")
    @entity = e || basectx&.entity

    s = FortniteHelpers.get_ctx_prop(ctxmap, "shared")
    @shared = s.is_a?(Hash) ? s : basectx&.shared

    om = FortniteHelpers.get_ctx_prop(ctxmap, "opmap")
    @opmap = om.is_a?(Hash) ? om : (basectx&.opmap || {})

    @data = FortniteHelpers.to_map(FortniteHelpers.get_ctx_prop(ctxmap, "data")) || {}
    @reqdata = FortniteHelpers.to_map(FortniteHelpers.get_ctx_prop(ctxmap, "reqdata")) || {}
    @match = FortniteHelpers.to_map(FortniteHelpers.get_ctx_prop(ctxmap, "match")) || {}
    @reqmatch = FortniteHelpers.to_map(FortniteHelpers.get_ctx_prop(ctxmap, "reqmatch")) || {}

    pt = FortniteHelpers.get_ctx_prop(ctxmap, "point")
    @point = pt.is_a?(Hash) ? pt : basectx&.point

    sp = FortniteHelpers.get_ctx_prop(ctxmap, "spec")
    @spec = sp.is_a?(FortniteSpec) ? sp : basectx&.spec

    r = FortniteHelpers.get_ctx_prop(ctxmap, "result")
    @result = r.is_a?(FortniteResult) ? r : basectx&.result

    rp = FortniteHelpers.get_ctx_prop(ctxmap, "response")
    @response = rp.is_a?(FortniteResponse) ? rp : basectx&.response

    opname = FortniteHelpers.get_ctx_prop(ctxmap, "opname") || ""
    @op = resolve_op(opname)
  end

  def resolve_op(opname)
    return @opmap[opname] if @opmap[opname]
    return FortniteOperation.new({}) if opname.empty?

    entname = @entity&.respond_to?(:get_name) ? @entity.get_name : "_"
    opcfg = VoxgigStruct.getpath(@config, "entity.#{entname}.op.#{opname}")

    input = (opname == "update" || opname == "create") ? "data" : "match"

    points = []
    if opcfg.is_a?(Hash)
      t = VoxgigStruct.getprop(opcfg, "points")
      points = t if t.is_a?(Array)
    end

    op = FortniteOperation.new({
      "entity" => entname,
      "name" => opname,
      "input" => input,
      "points" => points,
    })
    @opmap[opname] = op
    op
  end

  def make_error(code, msg)
    FortniteError.new(code, msg, self)
  end
end
